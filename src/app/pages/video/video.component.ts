import { Component } from '@angular/core';
import { ReviewComponent } from "../../review/review.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  // Language options
  languages: string[] = ['English', 'Spanish', 'French', 'German'];
  selectedLanguage: string = 'English';

  // Transcript text
  transcript: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula eu purus vel bibendum. Integer pharetra libero nec justo pharetra, nec auctor turpis mattis Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some?There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

  // Toggle display of the transcript
  showTranscript: boolean = true;

  // Auto-scroll functionality
  autoScroll: boolean = false;


  courseOutline = [
    {
      id: 'week0',
      title: 'Week 0',
      items: [
        'About NPTEL',
        'How does an NPTEL online course work?'
      ]
    },
    {
      id: 'week1',
      title: 'Week 1',
      items: [
        'Lecture 1: Introduction to IoT - Part I',
        'Lecture 2: Introduction to IoT - Part II',
        'Lecture 3: Sensing',
        'Lecture 4: Actuation',
        'Lecture 5: Basics of IoT Networking',
        'Week 1: Lecture materials',
        'Quiz: Week 1 - Assignment 1',
        'Week 1 Feedback Form',
        'Assignment 1 Solution'
      ]
    },
    {
      id: 'week2',
      title: 'Week 2',
      items: [
        'Lecture 1: Topic X',
        'Lecture 2: Topic Y'
      ]
    }
  ];
  // Function to toggle transcript visibility
  toggleTranscript(): void {
    this.showTranscript = !this.showTranscript;
  }
}
