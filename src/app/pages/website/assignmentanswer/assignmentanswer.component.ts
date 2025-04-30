import { Component,Input,OnInit} from '@angular/core';
import { MainService } from '../../../service/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignmentanswer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './assignmentanswer.component.html',
  styleUrl: './assignmentanswer.component.css'
})
export class AssignmentanswerComponent implements OnInit {
  // @Input() sectionId: string | null = null; // Input to receive section ID from parent component
  
  // // assignmentId = '';
  // // studentName = '';
  // textAnswer = '';
  // file: File | null = null;
  // id=''
  // mySubmissions: any[] = [];


  // submittedAnswers: any[] = [];
  // assignmentDetails: any = []; // Assignment details object
  // successMessage = '';
  // errorMessage = '';

  // constructor(private mainserve:MainService) {}

  // ngOnInit(): void {
  //     this.id=localStorage.getItem('loginId') || '';
  //     this.getassignment()
  // }

  // onFileChange(event: any) {
  //   this.file = event.target.files[0];
  // }

  // loadSubmissions() {
  //   this.mainserve.viewMySubmissions(this.id).subscribe({
  //     next: (res: any) => {
  //       this.mySubmissions = res.answers;
  //     },
  //     error: (err: any) => {
  //       this.errorMessage = 'Failed to load your submissions';
  //       console.error(err);
  //     }
  //   });
  // }


  

  // submitAnswer() {
  //   const formData = new FormData();
  //   formData.append('assignmentId', this.assignmentDetails._id);
  //   formData.append('studentName', this.id);
  //   formData.append('textAnswer', this.textAnswer);
  //   if (this.file) {
  //     formData.append('fileUrl', this.file);
  //   }

  //   this.mainserve.submitAssignment(formData).subscribe({
  //     next: (res: any) => {
  //       this.successMessage = res.message;
  //       this.errorMessage = '';
  //       this.getAnswers(); // Refresh after submission
  //       this.textAnswer = '';
  //       this.file = null;
  //     },
  //     error: (err: { error: { message: string; }; }) => {
  //       this.errorMessage = err.error.message || 'Submission failed.';
  //       this.successMessage = '';
  //     }
  //   });
  // }

  // getassignment() {
  //   this.mainserve.viewAssignment(this.sectionId).subscribe(
  //     (res: any) => {
  //       this.assignmentDetails = res.assignments[0]; // ✅ Correct - picks actual assignment object
  //       console.log('Assignment Details:', this.assignmentDetails); // Debugging log
  
  //       // Call getAnswers() after assignment details are fetched
  //       if (this.assignmentDetails._id) {
  //         this.getAnswers();
  //       }
  //     },
  //     (error) => {
  //       console.error('Failed to fetch assignment details:', error);
  //       this.errorMessage = 'Failed to fetch assignment details.';
  //     }
  //   );
  // }

  // getAnswers() {
  //   if (!this.assignmentDetails._id) return;
  
  //   this.mainserve.viewsubmittedassignment(this.assignmentDetails._id).subscribe({
  //     next: (res: any) => {
  //       const allAnswers = res || [];
  
  //       // Filter only the current student's submissions
  //       this.submittedAnswers = allAnswers.filter(
  //         (ans: any) => ans.studentName === this.id
  //       ).slice(0, 3); // Only show up to 3
  
  //     },
  //     error: (err: any) => {
  //       console.error('Error fetching answers:', err);
  //     }
  //   });
  // }

  @Input() sectionId: string | null = null;

  textAnswer = '';
  file: File | null = null;
  id = '';
  submittedAnswers: any[] = [];
  assignmentDetails: any = [];
  successMessage = '';
  errorMessage = '';
  hasSubmitted = false; // ✅ Track if already submitted

  constructor(private mainserve: MainService) {}

  ngOnInit(): void {
    this.id = localStorage.getItem('loginId') || '';
    this.getassignment();
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  submitAnswer() {
    const formData = new FormData();
    formData.append('assignmentId', this.assignmentDetails._id);
    formData.append('studentName', this.id);
    formData.append('textAnswer', this.textAnswer);
    if (this.file) {
      formData.append('fileUrl', this.file);
    }

    this.mainserve.submitAssignment(formData).subscribe({
      next: (res: any) => {
        this.successMessage = res.message;
        this.errorMessage = '';
        this.getAnswers();
        this.textAnswer = '';
        this.file = null;
      },
      error: (err: { error: { message: string } }) => {
        this.errorMessage = err.error.message || 'Submission failed.';
        this.successMessage = '';
      }
    });
  }

  getassignment() {
    this.mainserve.viewAssignment(this.sectionId).subscribe(
      (res: any) => {
        this.assignmentDetails = res.assignments[0];
        if (this.assignmentDetails._id) {
          this.getAnswers();
        }
      },
      (error) => {
        console.error('Failed to fetch assignment details:', error);
        this.errorMessage = 'Failed to fetch assignment details.';
      }
    );
  }

  getAnswers() {
    if (!this.assignmentDetails._id) return;

    this.mainserve.viewsubmittedassignment(this.assignmentDetails._id).subscribe({
      next: (res: any) => {
        const allAnswers = res || [];
        this.submittedAnswers = allAnswers.filter(
          (ans: any) => ans.studentName === this.id
        ).slice(0, 1); // Just fetch the latest one

        // ✅ Populate and lock if already submitted
        if (this.submittedAnswers.length > 0) {
          this.hasSubmitted = true;
          this.textAnswer = this.submittedAnswers[0].textAnswer;
        }
      },
      error: (err: any) => {
        console.error('Error fetching answers:', err);
      }
    });
  }
}
