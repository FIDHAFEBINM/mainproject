import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questionpaper',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './questionpaper.component.html',
  styleUrl: './questionpaper.component.css'
})
export class QuestionpaperComponent {

  @Input() section: any;
  questions: any[] = [
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      mark:1
    },
  ];

  onSubmit() {
    const answers = this.questions.map((q) => ({
      question: q.question,
      selectedAnswer: q.correctAnswer,
    }));
    console.log('Answers submitted:', answers);
    // Here you can submit the answers to your backend
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
