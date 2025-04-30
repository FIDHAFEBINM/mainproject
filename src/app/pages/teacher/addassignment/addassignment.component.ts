import { CommonModule } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-addassignment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addassignment.component.html',
  styleUrl: './addassignment.component.css'
})
export class AddassignmentComponent implements OnInit {
  // @Input() sectionId!: string; // Section ID from parent component

  // assignment = {
  //   title: '',
  //   // description: '',
  //   question: '',
  //   teacherAnswer: '',
  //   // file: null as File | null,
  //   // dueDate: ''
  // };

  // constructor(private mainserve:MainService) {}

  // ngOnInit(): void {
  //   console.log('Section ID:', this.sectionId);

  // }

  // // onFileChange(event: any) {
  // //   this.assignment.file = event.target.files[0]; // Get selected file
  // // }

  // submitAssignment() {
  //   if (!this.sectionId) {
  //     alert('Section ID is missing!');
  //     return;
  //   }



   
  // const assignmentData = {
  //   title: this.assignment.title,
  //   question: this.assignment.question,
  //   teacherAnswer: this.assignment.teacherAnswer,
  //   // dueDate: this.assignment.dueDate,
  //   sectionId: this.sectionId,
  // };

  //   // Send the data to the backend
  //   this.mainserve.addAssignment(assignmentData).subscribe((res:any)=>{
  //     alert("suucesfully added")
  //   })
    
  // }

  // resetForm() {
  //   this.assignment = {
  //     title: '',
  //     // description: '',
  //     question: '',
  //     teacherAnswer: '',
  //     // file: null,
  //     // dueDate: ''
  //   };
  // }
  @Input() sectionId!: string; // Section ID from parent component
  @Input() assignmentId!: string; // Assignment ID to view or delete

  assignment = {
    title: '',
    question: '',
    teacherAnswer: '',
    // viewed: false, // To track if the assignment has been viewed
  };

  ids=''

  constructor(private mainserve: MainService) {}

  ngOnInit(): void {


    if (this.sectionId) {
      this.viewAssignment(this.sectionId); // Fetch assignment details if sectionId is provided
     }
  }

  // Fetching the assignment details from the backend
  viewAssignment(sectionId: string) {
    this.mainserve.viewAssignment(sectionId).subscribe((res: any) => {
    
         this.assignment = {
          title: res.assignments[0].title,
          question: res.assignments[0].question,
          teacherAnswer: res.assignments[0].teacherAnswer,
          // Add any other fields you use
        };
          // this.assignment.viewed = true;
        this.ids = res.assignments[0]._id
        // this.assignment.viewed = true;
      
    });
    
  }

  // Submit the assignment form
  submitAssignment() {
    if (!this.sectionId) {
      alert('Section ID is missing!');
      return;
    }

    const assignmentData = {
      title: this.assignment.title,
      question: this.assignment.question,
      teacherAnswer: this.assignment.teacherAnswer,
      sectionId: this.sectionId,
    };

    this.mainserve.addAssignment(assignmentData).subscribe((res: any) => {
      alert("Assignment added successfully");
    });
    this.viewAssignment(this.sectionId); // Fetch updated assignment details after submission
  }

  // Reset form fields
  resetForm() {
    this.assignment = {
      title: '',
      question: '',
      teacherAnswer: '',
      // viewed: false,
    };
  }

  // Delete the assignment
  deleteAssignment(id: string) {
    this.mainserve.deleteassignment(id).subscribe((res: any) => {
      
      alert('Assignment deleted successfully');
      // Reset the form after deletion or you can redirect to another page
      this.resetForm();
    });
    this.viewAssignment(this.sectionId); // Fetch updated assignment details after deletion
  }
}
