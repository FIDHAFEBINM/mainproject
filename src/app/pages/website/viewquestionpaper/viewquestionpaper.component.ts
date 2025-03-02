import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constrainedMemory } from 'process';

@Component({
  selector: 'app-viewquestionpaper',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './viewquestionpaper.component.html',
  styleUrl: './viewquestionpaper.component.css'
})
export class ViewquestionpaperComponent {
  questions: any[] = [
    { text: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correct: '4', marks: 2 },
    { text: 'What is 3 + 5?', options: ['7', '8', '9', '10'], correct: '8', marks: 3 },
    { text: 'What is 10 - 4?', options: ['4', '5', '6', '7'], correct: '6', marks: 2 },
    // Add more questions as needed
  ];

  answers: string[] = new Array(this.questions.length).fill('');
  minutes: number = 2; // Set timer duration in minutes
  seconds: number = 0;
  timer: any;
  totalMarks: number | null = null;
  totalPossibleMarks: number = this.questions.reduce((sum, question) => sum + question.marks, 0);
  isSubmitted: boolean = false; // Flag to track if the answers are submitted

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.clearTimer();
    this.timer = setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        this.timeUp();
      } else if (this.seconds === 0) {
        this.minutes--;
        this.seconds = 59;
      } else {
        this.seconds--;
      }
    }, 1000);
  }

  clearTimer(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  timeUp(): void {
    if (this.isSubmitted) return; // Prevent multiple time-up triggers
    this.clearTimer();
    this.showMessage('Time is up! Your answers will be submitted.');
    this.submit();
  }

  submit(): void {
    if (this.isSubmitted) return; // Prevent multiple submissions
    this.clearTimer();

    // Calculate total marks
    this.totalMarks = this.questions.reduce((sum, question, index) => {
      if (this.answers[index] === question.correct) {
        return sum + question.marks;
      }
      return sum;
    }, 0);

    this.isSubmitted = true; // Set flag to true so the correct/incorrect answers are highlighted
    this.showMessage('Your answers have been submitted.');
  }

  showMessage(message: string): void {
    alert(message); // Replace with modal if needed
  }     

}
