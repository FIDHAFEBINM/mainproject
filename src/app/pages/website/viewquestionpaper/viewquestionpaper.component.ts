import { CommonModule } from '@angular/common';
import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constrainedMemory } from 'process';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-viewquestionpaper',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './viewquestionpaper.component.html',
  styleUrl: './viewquestionpaper.component.css'
})
export class ViewquestionpaperComponent {
  // @Input () sectionId: string | null = null; // Input property to receive section ID from parent component

  // questions: any[] = [ ];
  // answers: string[] = new Array(this.questions.length).fill('');
  // minutes: number = 0; // Set timer duration in minutes
  // seconds: number = 0;
  // timer: any;
  // totalMarks: number | null = null;
  // totalPossibleMarks: number = this.questions.reduce((sum, question) => sum + question.marks, 0);
  // isSubmitted: boolean = false; // Flag to track if the answers are submitted
  // hasquestions: boolean = false; // Flag to indicate if questions are available

  // constructor(private mainserve:MainService){}

  // ngOnInit(): void {
  //   this.loadquestionpaper()
  //   this.startTimer();
  // }

  // startTimer(): void {
  //   this.clearTimer();
  //   this.timer = setInterval(() => {
  //     if (this.minutes === 0 && this.seconds === 0) {
  //       this.timeUp();
  //     } else if (this.seconds === 0) {
  //       this.minutes--;
  //       this.seconds = 59;
  //     } else {
  //       this.seconds--;
  //     }
  //   }, 1000);
  // }

  // clearTimer(): void {
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //     this.timer = null;
  //   }
  // }

  // timeUp(): void {
  //   if (this.isSubmitted) return; // Prevent multiple time-up triggers
  //   this.clearTimer();
  //   this.showMessage('Time is up! Your answers will be submitted.');
  //   this.submit();
  // }

  // loadquestionpaper(): void {
  //   if (!this.sectionId) return;

  //   this.mainserve.viewmcq(this.sectionId).subscribe((res: any) => {
  //     this.questions = res || [];
  //     this.hasquestions = this.questions.length > 0;

  //     if (this.hasQuestions) {
  //       // Initialize answers array
  //       this.answers = new Array(this.questions.length).fill('');

  //       // Set total possible marks
  //       this.totalPossibleMarks = this.questions.reduce((sum, q) => sum + (q.mark || 1), 0);

  //       // Set timer: 1 minute per question
  //       this.minutes = this.questions.length;
  //       this.seconds = 0;

  //       // Start the timer
  //       this.startTimer();
  //     }
  //   });
    
  // }

  // get hasQuestions(): boolean {
  //   return this.questions && this.questions.length > 0;
  // }
    

  // submit(): void {
  //   if (this.isSubmitted) return; // Prevent multiple submissions
  //   this.clearTimer();

  //   // Calculate total marks
  //   this.totalMarks = this.questions.reduce((sum, question, index) => {
  //     if (this.answers[index] === question.correctAnswer) {
  //       return sum + question.mark;
  //     }
  //     return sum;
  //   }, 0);

  //   this.isSubmitted = true; // Set flag to true so the correct/incorrect answers are highlighted
  //   this.showMessage('Your answers have been submitted.');
  // }

  // showMessage(message: string): void {
  //   alert(message); // Replace with modal if needed
  // }     


  @Input() sectionId: string | null = null; // Input to receive section ID from parent component
  questions: any[] = []; // Array to hold questions
  answers: string[] = []; // Array to store user answers
  minutes: number = 0; // Timer duration in minutes
  seconds: number = 0; // Timer duration in seconds
  timer: any; // Timer reference
  totalMarks: number | null = null; // Total marks scored by the user
  totalPossibleMarks: number = 0; // Total possible marks
  isSubmitted: boolean = false; // Flag to track if the answers are submitted
  hasQuestions: boolean = true; // Flag to check if questions are available

  constructor(private mainserve: MainService) {}

  ngOnInit(): void {
    this.loadQuestions(); 
  }

  loadQuestions(): void {
    if (!this.sectionId) return;
  
    this.mainserve.viewmcq(this.sectionId).subscribe({
      next: (res: any) => {
        this.questions = res || [];
        this.hasQuestions = this.questions.length > 0;
  
        if (this.hasQuestions) {
          this.answers = new Array(this.questions.length).fill('');
          this.totalPossibleMarks = this.questions.reduce((sum, q) => sum + (q.mark || 1), 0);
          this.minutes = this.questions.length;
          this.seconds = 0;
          this.startTimer();
        }
      },
      error: (err) => {
        if (err.status === 404) {
          this.hasQuestions = false; // prevent showing quiz
          console.warn('No question paper found for this section.');
        } else {
          console.error('Error loading question paper:', err);
        }
      }
    });
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
    alert('Time is up! Your answers will be submitted.');
    this.submit();
  }

  submit(): void {
    if (this.isSubmitted) return; // Prevent multiple submissions
    this.clearTimer();
 
    // Calculate total marks
    this.totalMarks = this.questions.reduce((sum, question, index) => {
      if (this.answers[index] === question.correctAnswer) {
        return sum + (question.mark || 1);
      }
      return sum;
    }, 0);

    this.isSubmitted = true; // Mark as submitted
    alert('Your answers have been submitted.');
  }



}
