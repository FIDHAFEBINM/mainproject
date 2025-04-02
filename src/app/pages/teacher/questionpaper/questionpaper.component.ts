import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-questionpaper',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './questionpaper.component.html',
  styleUrl: './questionpaper.component.css'
})
export class QuestionpaperComponent {

  @Input() section: any;
  
  @Input() sectionId!: string; 
  questions: any[] = [
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      mark:1
    },
  ];

   constructor(private mainserve:MainService){}
  // onSubmit() {
  //   const answers = this.questions.map((q) => ({
  //     question: q.question,
  //     selectedAnswer: q.correctAnswer,
  //   }));
  //   console.log('Answers submitted:', answers);
  //   // Here you can submit the answers to your backend
  // }


  onSubmit() {
    console.log('Section ID:', this.sectionId);  // Verify the section ID is being passed
  
    if (!this.sectionId) {
      alert('No section ID found. Please try again.');
      return;
    }
  
    if (this.questions && this.questions.length > 0) {
      const payload = { 
        section: this.sectionId, 
        questions: this.questions 
      };
  
      console.log('Payload sent:', JSON.stringify(payload));
  
      this.mainserve.addmcq(payload).subscribe(
        (res: any) => {
          console.log('Questions added', res);
          alert('Added successfully');
        },
        (error: any) => {
          console.error('Error:', error);
          alert('Failed to add questions');
        }
      );
    } else {
      alert('Please add some questions before submitting.');
    }
  }
  

  addQuestion() {

    
    this.questions.push({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      mark:1 
    });
  }


}
