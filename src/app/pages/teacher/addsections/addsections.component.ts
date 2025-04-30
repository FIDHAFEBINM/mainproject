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
  sections: any[] = [];
  selectedCourseId: string = '';
  activeSectionId: string | null = null;
  activeTab: string | null = null;
  isEditing: boolean = false; // To check if we are in edit mode
  sectionsByCourse: any[] = [];
 

  newSection = {
    _id: '', // Add _id for updating a section
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

  loadCourses(): void {
    this.sectionService.viewCourse().subscribe((data: any) => {
      this.courses = data;
    });
  }

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
      this.activeSectionId = null;
      this.activeTab = null;
    } else {
      this.activeSectionId = section._id;
      this.activeTab = tab;
    }
  }

  loadSectionsByCourse(): void {
    if (this.selectedCourseId) {
      this.sectionService.sectionbycourseid(this.selectedCourseId).subscribe((data: any) => {
        this.sections = data;
      });
    } else {
      this.sections = [];
    }
  }

  onFileChange(event: any, type: 'video' | 'pdf'): void {
    if (type === 'video') {
      this.newSection.videoFile = event.target.files[0];
    } else {
      this.newSection.pdfFile = event.target.files[0];
    }
  }

  // Add or Update section
  createOrUpdateSection(): void {
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

    if (this.isEditing) {
      // Update section
      this.sectionService.editsection(formData, this.newSection._id).subscribe(() => {
        this.loadSections();
        this.resetForm();
      });
    } else {
      // Create new section
      this.sectionService.createSection(formData).subscribe(() => {
        alert('Section created successfully!');
        this.loadSections();
        this.resetForm();
      });
    }
  }

  // Set section for editing
  editSection(section: any): void {
    this.isEditing = true;
  
    // Pre-fill form with section data including videoTitle and pdfTitle
    this.newSection = {
      _id: section._id, // Ensure section ID is passed for updates
      name: section.name,
      videoTitle: section.videoTitle || '',  // Default to empty string if undefined
      pdfTitle: section.pdfTitle || '',  // Default to empty string if undefined
      videoFile: null,  // Optionally clear video file
      pdfFile: null,  // Optionally clear pdf file
    };
  
    console.log('Section being edited:', this.newSection);  // Debugging line
  }

  // Delete section
  deleteSection(id: string): void {
    this.sectionService.deleteSection(id).subscribe(() => {
      this.loadSections();
    });
  }

  resetForm(): void {
    this.isEditing = false;
    this.newSection = {
      _id: '',
      name: '',
      videoTitle: '',
      pdfTitle: '',
      videoFile: null,
      pdfFile: null
    };
  }
}
