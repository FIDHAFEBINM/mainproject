import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-uploadassignment',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './uploadassignment.component.html',
  styleUrl: './uploadassignment.component.css'
})
export class UploadassignmentComponent {
  assignmentForm: FormGroup;
  selectedFile: File | null = null;
  fileURL: string | null = null;

  assignmentQuestion = "Solve the following math problem: If a train travels 120 km in 2 hours, what is its speed in km/h?";

  constructor(private fb: FormBuilder) {
    this.assignmentForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.selectedFile = file;
      this.assignmentForm.patchValue({ file });

      // Read file as Base64 and display in iframe
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.fileURL = e.target.result; // Convert to Base64
      };
      reader.readAsDataURL(file);
    } else {
      alert('Only PDF files are allowed.');
      event.target.value = ''; // Reset file input
      this.fileURL = null;
    }
  }

  submitAssignment() {
    if (this.assignmentForm.valid && this.selectedFile) {
      alert(`Assignment "${this.selectedFile.name}" uploaded successfully!`);
      // TODO: Send the file to the backend
    } else {
      alert('Please upload a valid PDF file.');
    }
  }
  downloadAssignment() {
    if (this.fileURL) {
      const a = document.createElement('a');
      a.href = this.fileURL;
      a.download = this.selectedFile!.name;
      a.click();
    }
  }

 }

