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

  // @Input() section: any;
  
  // @Input() sectionId!: string; 
  // questions: any[] = [
  //   {
  //     question: '',
  //     options: ['', '', '', ''],
  //     correctAnswer: '',
  //     mark:1
  //   },
  // ];

  //  constructor(private mainserve:MainService){}
  // // onSubmit() {
  // //   const answers = this.questions.map((q) => ({
  // //     question: q.question,
  // //     selectedAnswer: q.correctAnswer,
  // //   }));
  // //   console.log('Answers submitted:', answers);
  // //   // Here you can submit the answers to your backend
  // // }


  // onSubmit() {
  //   console.log('Section ID:', this.sectionId);  // Verify the section ID is being passed
  
  //   if (!this.sectionId) {
  //     alert('No section ID found. Please try again.');
  //     return;
  //   }
  
  //   if (this.questions && this.questions.length > 0) {
  //     const payload = { 
  //       section: this.sectionId, 
  //       questions: this.questions 
  //     };
  
  //     console.log('Payload sent:', JSON.stringify(payload));
  
  //     this.mainserve.addmcq(payload).subscribe(
  //       (res: any) => { 
  //         console.log('Questions added', res);
  //         alert('Added successfully');
  //       },
  //       (error: any) => {
  //         console.error('Error:', error);
  //         alert('Failed to add questions');
  //       }
  //     );
  //   } else {
  //     alert('Please add some questions before submitting.');
  //   }
  // }
  

  // addQuestion() {

    
  //   this.questions.push({
  //     question: '',
  //     options: ['', '', '', ''],
  //     correctAnswer: '',
  //     mark:1 
  //   });
  // }



  @Input() section: any;
  @Input() sectionId!: string;

  questions: any[] = [
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      mark: 1,
    },
  ];

  constructor(private mainserve: MainService) {}

  ngOnInit() {
    if (this.sectionId) {
      this.mainserve.viewmcq(this.sectionId).subscribe(
        (res: any) => {
          if (res && res.length > 0) {
            this.questions = res.map((q: any) => ({
              _id: q._id, // important for edit
              question: q.question,
              options: q.options,
              correctAnswer: q.correctAnswer,
              mark: q.mark,
            }));
          }
        },
        (err) => {
          console.error('Error fetching existing MCQs:', err);
        }
      );
    }
  }

  addQuestion() {
    this.questions.push({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      mark: 1,
    });
  }

  onSubmit() {
    if (!this.sectionId) {
      alert('No section ID found.');
      return;
    }

    const payload = {
      section: this.sectionId,
      questions: this.questions,
    };

    this.mainserve.editquetsion(payload).subscribe(
      (res: any) => {
        console.log('Questions updated:', res);
        alert('Questions saved successfully');
      },
      (error: any) => {
        console.error('Error:', error);
        alert('Failed to save questions');
      }
    );
  }

  updateOption(questionIndex: number, optionIndex: number, value: string) {
    this.questions[questionIndex].options[optionIndex] = value;
  }

  deleteQuestion(index: number, id : string) {
    if (id) {
      // If question has an ID, it's saved in DB
      if (confirm('Are you sure you want to delete this question permanently?')) {
        this.mainserve.deletemcq(id).subscribe({
          next: (res:any) => {
            alert('Question deleted successfully');
            this.questions.splice(index, 1);
          },
          error: (err:any) => {
            console.error('Error deleting question:', err);
            alert('Failed to delete question');
          },
        });
      }
    } else {
      // If no ID, it's a new unsaved question
      this.questions.splice(index, 1);
    }
  }
  

}


