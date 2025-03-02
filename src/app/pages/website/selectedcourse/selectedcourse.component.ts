import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayreviewComponent } from "../../../displayreview/displayreview.component";
import { ReviewComponent } from "../../../review/review.component";

@Component({
  selector: 'app-selectedcourse',
  standalone: true,
  imports: [CommonModule, DisplayreviewComponent, ReviewComponent],
  templateUrl: './selectedcourse.component.html',
  styleUrl: './selectedcourse.component.css'
})
export class SelectedcourseComponent implements OnInit {
  itemsToShow: number = 10;
  initialItemsToShow: number = 10;
  price=300
  Lorem="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Where can I get some?There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  rating: number = 4.3;
  totalRatings: number = 1742;
  learners: number = 122216;
  reviewCount = 25;
  user = { isTeacher: true };

  // Stars array for visual representation
  starsArray: string[] = [];



  courses = [
    {
      id: 'collapse1',
      title: 'Copywriting Essentials, Curriculum, Resources, & AIDA Copywriting Framework',
      details: '8 lectures · 57min',
    },
    {
      id: 'collapse2',
      title: 'Introduction to ChatGPT + Gemini for Beginners & 90+ Reels Creation with Canva',
      details: '3 lectures · 48min',
    },
    {
      id: 'collapse3',
      title: 'ChatGPT & Gemini for Social Media Planning, Content & Reels Writing, Ads Library',
      details: '15 lectures · 1hr 46min',
    },
    {
      id: 'collapse4',
      title: 'Copywriting for Facebook & Instagram (Social Media Copywriting)',
      details: '8 lectures · 42min',
    },
    {
      id: 'collapse5',
      title: 'Copywriting Ideas & Fantastic Free Keywords Research',
      details: '2 lectures · 33min',
    },
    {
      id: 'collapse6',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse7',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse8',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse9',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse10',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse11',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse12',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    {
      id: 'collapse13',
      title: '23 General Copywriting Templates & Developing Copywriting Skills',
      details: '3 lectures · 1hr 9min',
    },
    
    
  ];

  lessons = [
    {
      title: "Welcome To The Course!",
      type: 'video',
      duration: "01:07",
    },
    {
      title: "What is React.js? And Why Would You Use It?",
      type:'video',
      duration: "02:58",
    },
    {
      title: "ReactJS vs 'Vanilla JavaScript': Why Use React?",
      type: 'video',
      duration: "10:57",
    },
    {
      title: "Editing Our First React App",
      type: 'video',
      duration: "04:22",
    },
    {
      title: "About This Course & Course Outline",
      type:'video',
      duration: "02:55",

    },
    {
      title: "The Two Ways (Paths) Of Taking This Course",
      type: 'video',
      duration: "03:08",

    },
    {
      title: "Getting The Most Out Of This Course",
      type: 'video',
      duration: "05:24",

    },
    {
      title: "Join our Online Learning Community",
      type: 'video',
      duration: "00:29",

    },
    {
      title: "Creating React Projects",
      type: 'pdf',
      duration: "07:10",

    },
    {
      title: "Why Do You Need A Special Project Setup?",
      type: 'video',
      duration: "02:51",

    },
    {
      title: "Course Setup",
      type: 'pdf',
      duration: "00:32",

    },
    {
      title: "Question Paper",
      type: 'quetsion',
      duration: "01:30",
    },
    {
      title: "Course Setup",
      type: 'assignment',
      duration: "00:32",

    },
  ];
  

  constructor(private router:Router){}

  ngOnInit(): void {
      this.updateStars()
  }

  get displayedCourses() {
    return this.courses.slice(0, this.itemsToShow);
  }

  loadMore() {
    this.itemsToShow += 10;
  }
  showLess() {
    this.itemsToShow = this.initialItemsToShow;
  }
  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)).fill(0);
  }

  buyNow() {
  }

  addToCart() {
    alert('Item added to cart!');
  }

  toVideo(){
    this.router.navigate(['video'])
  }
  topdf(){
    this.router.navigate(['pdfview'])
  }
  toquestionpaper(){
    this.router.navigate(['viewquestion'])
  }
  toassignment(){
    this.router.navigate(['assignmentupdate'])
  }
  updateStars() {
    this.starsArray = [];
    for (let i = 1; i <= 5; i++) {
      this.starsArray.push(i <= this.rating ? 'text-warning' : 'text-muted');
    }
  }

  // Handle rating click
  rate(newRating: number) {
    this.rating = newRating;
    this.updateStars();
  }

  handleLessonClick(lesson: { type: string }) {
    if (lesson.type === 'video') {
      this.toVideo();
    } else if (lesson.type === 'pdf') {
      this.openPdf();
    }
    else if(lesson.type === 'quetsion'){
      this.toquestionpaper();
    }
    else if(lesson.type === 'assignment'){
      this.toassignment();
    }
  }

  file = 'pdf/Document PDF (1).pdf'

  openPdf() {
    window.open(this.file, '_blank'); // Opens PDF in a new tab
  }
}

  

