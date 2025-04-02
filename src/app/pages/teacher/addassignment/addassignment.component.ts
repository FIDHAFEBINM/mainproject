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
  @Input() sectionId!: string; // Section ID from parent component

  assignment = {
    title: '',
    // description: '',
    question: '',
    teacherAnswer: '',
    // file: null as File | null,
    dueDate: ''
  };

  constructor(private mainserve:MainService) {}

  ngOnInit(): void {
    console.log('Section ID:', this.sectionId);

  }

  // onFileChange(event: any) {
  //   this.assignment.file = event.target.files[0]; // Get selected file
  // }

  submitAssignment() {
    if (!this.sectionId) {
      alert('Section ID is missing!');
      return;
    }



   
  const assignmentData = {
    title: this.assignment.title,
    question: this.assignment.question,
    teacherAnswer: this.assignment.teacherAnswer,
    dueDate: this.assignment.dueDate,
    sectionId: this.sectionId,
  };

    // Send the data to the backend
    this.mainserve.addAssignment(assignmentData).subscribe((res:any)=>{
      alert("suucesfully added")
    })
    
  }

  resetForm() {
    this.assignment = {
      title: '',
      // description: '',
      question: '',
      teacherAnswer: '',
      // file: null,
      dueDate: ''
    };
  }
}
