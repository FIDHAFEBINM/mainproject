import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewprofile.component.html',
  styleUrl: './viewprofile.component.css'
})
export class ViewprofileComponent {

  profileData = {
    name: 'Fidha Febin',
    description: `I am an experienced web development instructor with over 5 years of teaching 
    experience. My expertise lies in teaching HTML, CSS, JavaScript, and Angular. I specialize 
    in making complex concepts easy to understand for learners of all levels. Whether you're a 
    beginner or someone looking to advance your skills, I focus on providing hands-on, practical 
    learning experiences to help you achieve your development goals.`,
    profilePicture: '/image/doc.jpg',
    courses: ['HTML Basics', 'Advanced CSS', 'JavaScript Essentials', 'Mastering Angular'],
    about: `I am passionate about making web development accessible to everyone. My teaching philosophy 
    is centered on empowering students through hands-on projects and real-world examples. My courses are 
    designed to be engaging, interactive, and focused on building skills that will prepare you for the 
    demands of the industry.`,
    contactEmail: 'teacher@example.com'
  };

  rating: number = 4.3;
  totalRatings: number = 1742;
  learners: number = 122216;

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)).fill(0);
  }
}
