import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-selectedteachercourse',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './selectedteachercourse.component.html',
  styleUrl: './selectedteachercourse.component.css'
})
export class SelectedteachercourseComponent {
  courseContent = [
    {
      category: 'Programming',
      subcategory: 'Web Development',
      title: 'HTML & CSS Basics',
      sections: [
        {
          name: 'Introduction to Web Development',
          videos: [
            { name: 'Intro Video', url: '/assets/videos/intro.mp4' },
            { name: 'HTML Structure', url: '/assets/videos/html-structure.mp4' }
          ],
          previewVideo: '/assets/videos/preview.mp4',
          pdfUrl: '/assets/pdfs/html-css-basics.pdf',
          questionPaperUrl: '/assets/question-papers/html-css-basics.pdf'
        },
        {
          name: 'CSS Advanced Techniques',
          videos: [
            { name: 'CSS Flexbox', url: '/assets/videos/css-flexbox.mp4' },
            { name: 'CSS Grid', url: '/assets/videos/css-grid.mp4' }
          ],
          previewVideo: '/assets/videos/css-advanced-preview.mp4',
          pdfUrl: '/assets/pdfs/css-advanced.pdf',
          questionPaperUrl: '/assets/question-papers/css-advanced.pdf'
        }
      ]
    },
    {
      category: 'Data Science',
      subcategory: 'Machine Learning',
      title: 'Python for Data Science',
      sections: [
        {
          name: 'Python Basics',
          videos: [
            { name: 'Python Intro', url: '/assets/videos/python-intro.mp4' },
            { name: 'Data Types', url: '/assets/videos/python-data-types.mp4' }
          ],
          previewVideo: '/assets/videos/python-preview.mp4',
          pdfUrl: '/assets/pdfs/python-intro.pdf',
          questionPaperUrl: '/assets/question-papers/python-data-science.pdf'
        }
      ]
    }
  ];

  constructor(private router:Router){}

  editContent(item: any) {
    console.log('Editing content:', item);
    // Implement your logic for editing the content
    // This can open a form or redirect to an edit page
  }

  edit(){
    this.router.navigate(['/teacher/selectedEdit'])
  }
}
