import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../../service/main.service';
import { QuestionpaperComponent } from "../questionpaper/questionpaper.component";
import { UploadassignmentComponent } from "../../website/uploadassignment/uploadassignment.component";
import { AddassignmentComponent } from "../addassignment/addassignment.component";

@Component({
  selector: 'app-addsections',
  standalone: true,
  imports: [FormsModule, CommonModule, QuestionpaperComponent, AddassignmentComponent],
  templateUrl: './addsections.component.html',
  styleUrl: './addsections.component.css'
})
export class AddsectionsComponent {
  // courses: any[] = [];
  // sectionsByCourse: any[] = [];
  // selectedCourseId: string = '';
  
  // newSection = {
  //   name: '',
  //   videoTitle: '',
  //   pdfTitle: '',
  //   videoFile: null as File | null,
  //   pdfFile: null as File | null
  // };

  // constructor(private sectionService: MainService) {}

  // ngOnInit(): void {
  //   this.loadCourses();
  //   // this.loadSections();
  // }

  // loadCourses(): void {
  //   this.sectionService.viewCourse().subscribe((data:any) => {
  //     this.courses = data;
  //   });
  // }

  // loadSections(): void {
  //   this.sectionService.getSections().subscribe((data:any) => {
  //     this.sectionsByCourse = data;
  //   });
  // }

  // onFileChange(event: any, type: 'video' | 'pdf'): void {
  //   if (type === 'video') {
  //     this.newSection.videoFile = event.target.files[0];
  //   } else {
  //     this.newSection.pdfFile = event.target.files[0];
  //   }
  // }

  // createSection(): void {
  //   if (!this.selectedCourseId) {
  //     alert('Please select a course');
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append('course', this.selectedCourseId);
  //   formData.append('name', this.newSection.name);
  //   formData.append('videoTitle', this.newSection.videoTitle);
  //   formData.append('pdfTitle', this.newSection.pdfTitle);

  //   if (this.newSection.videoFile) {
  //     formData.append('video', this.newSection.videoFile);
  //   }
  //   if (this.newSection.pdfFile) {
  //     formData.append('pdf', this.newSection.pdfFile);
  //   }

  //   this.sectionService.createSection(formData).subscribe(() => {
  //     this.loadSections();
  //   });
  // }

  // deleteSection(id: string): void {
  //   this.sectionService.deleteSection(id).subscribe(() => {
  //     this.loadSections();
  //   });
  // }



  courses: any[] = [];
  sections: any[] = [];  // Only show sections for the selected course
  sectionsByCourse: any[] = [];
  selectedCourseId: string = '';
  activeSectionId: string | null = null;
  activeTab: string | null = null; // 'questionPaper' or 'assignment'
  
  newSection = {
    name: '',
    videoTitle: '',
    pdfTitle: '',
    videoFile: null as File | null,
    pdfFile: null as File | null
  };

  constructor(private sectionService: MainService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadSections();
  }

  // Load courses
  loadCourses(): void {
    this.sectionService.viewCourse().subscribe((data: any) => {
      this.courses = data;
    });
  }

  // Load sections
  loadSections(): void {
    this.sectionService.getSections().subscribe((data: any) => {
      // Add toggle flag for section expansion
      this.sectionsByCourse = data.map((course: any) => ({
        ...course,
        showAddSection: false
      }));
    });
  }

  toggleSection(section: any, tab: string) {
    if (this.activeSectionId === section._id && this.activeTab === tab) {
      // If clicking the same tab, close it
      this.activeSectionId = null;
      this.activeTab = null;
    } else {
      // Open the clicked tab
      this.activeSectionId = section._id;
      this.activeTab = tab;
    }
  }

  loadSectionsByCourse(): void {
    if (this.selectedCourseId) {
      this.sectionService.sectionbycourseid(this.selectedCourseId).subscribe((data: any) => {
        this.sections = data 
      });
    } else {
      this.sections = [];
    }
    console.log("sections",this.sections);
  }

  // Handle file selection
  onFileChange(event: any, type: 'video' | 'pdf'): void {
    if (type === 'video') {
      this.newSection.videoFile = event.target.files[0];
    } else {
      this.newSection.pdfFile = event.target.files[0];
    }
  }

  // Create a new section
  createSection(): void {
    if (!this.selectedCourseId) {
      alert('Please select a course');
      return;
    }

    const formData = new FormData();
    formData.append('course', this.selectedCourseId);
    formData.append('name', this.newSection.name);
    formData.append('videoTitle', this.newSection.videoTitle);
    formData.append('pdfTitle', this.newSection.pdfTitle);

    if (this.newSection.videoFile) {
      formData.append('video', this.newSection.videoFile);
    }
    if (this.newSection.pdfFile) {
      formData.append('pdf', this.newSection.pdfFile);
    }

    this.sectionService.createSection(formData).subscribe(() => {
      this.loadSections();
      this.resetForm();
    });
  }

  // Delete section
  deleteSection(id: string): void {
    this.sectionService.deleteSection(id).subscribe(() => {
      this.loadSections();
    });
  }

  // Toggle add-section form visibility
  toggleAddSection(courseId: string): void {
    this.sectionsByCourse = this.sectionsByCourse.map((course) => {
      if (course._id === courseId) {
        course.showAddSection = !course.showAddSection;
      }
      return course;
    });
  }

  // Reset form
  resetForm(): void {
    this.newSection = {
      name: '',
      videoTitle: '',
      pdfTitle: '',
      videoFile: null,
      pdfFile: null
    };
  }
}
