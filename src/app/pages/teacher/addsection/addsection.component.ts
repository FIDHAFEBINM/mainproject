import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuestionpaperComponent } from "../questionpaper/questionpaper.component";
import { MainService } from '../../../service/main.service';


@Component({
  selector: 'app-addsection',
  standalone: true,
  imports: [FormsModule, CommonModule,QuestionpaperComponent],
  templateUrl: './addsection.component.html',
  styleUrl: './addsection.component.css'
})
export class AddsectionComponent implements OnInit {
  // titles: string[] = ['Title 1', 'Title 2', 'Title 3'];
  // selectedTitle: string = '';
  // sectionName: string = '';
  // sections:string[]=['new1','new2','new3']
  // selectedsection:string=''
  // isAddingNewSection: boolean = false;
  // videoTitle: string = '';
  // selectedVideoFile: File | null = null;
  // pdfTitle: string = '';
  // selectedPdfFile: File | null = null;

  // onFileChanges(event: any) {
  //   const file = event.target.files[0];
  //   if (file && file.type === 'application/pdf') {
  //     this.selectedPdfFile = file;
  //   } else {
  //     alert('Please select a valid PDF file.');
  //     this.selectedPdfFile = null;
  //   }
  // }

  // onFileChange(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedVideoFile = file;
  //   }
  // }


  // onSubmit() {
  //   if (this.selectedTitle && (this.sectionName || this.selectedsection) ) {
  //     console.log('Selected Title:', this.selectedTitle);
  //     console.log('Section Name:', this.sectionName || this.selectedsection);

  //     if (this.selectedVideoFile) {
  
  //       const videoURL = URL.createObjectURL(this.selectedVideoFile);
  //       console.log('Video Title:', this.videoTitle);
  //       console.log('Video URL:', videoURL);
  //     }
  //     if (this.selectedPdfFile) {
       
  //       const pdfURL = URL.createObjectURL(this.selectedPdfFile);
  //       console.log('PDF Title:', this.pdfTitle);
  //       console.log('PDF URL:', pdfURL);
  //       // You can now use the pdfURL to display the PDF in your application
  //     }
  //     // Implement your form submission logic here
  //   } else {
  //     console.log('Please fill in all fields.');
  //   }
  // }
  course:any[]=[]

  sections: any[] = [];
  hide:boolean=true
  id:any=''

  section: string = '';

  sectionses:any={
    section:'',
    course:''
  }

  constructor(private mainserve:MainService) {}

  ngOnInit(): void {
      this.id=localStorage.getItem('loginId') || ''
      this.oncoursechange()
  }

  // Add a new section
  // addSection() {
  //   if (this.sectionName) {
  //     this.sections.push({
  //       name: this.sectionName,
  //       videoTitle: '',
  //       pdfTitle: '',
  //       videoFile: null,
  //       pdfFile: null,
  //       showQuiz:false
  //     });
  //     this.sectionName = ''; // Clear the input fields
  //   }
  // }

  addSection() {
    console.log(this.sectionses)
    if (this.sectionses) {  // Ensure course and section are selected
  
      this.mainserve.addsection(this.sectionses).subscribe((res: any) => {
        alert("Section added");
        this.sections.push({
          name: this.section,
          course: this.sectionses.course,    // Include the course ID
          videoTitle: '',
          pdfTitle: '',
          videoFile: null,
          pdfFile: null,
          showQuiz: false
        });
        this.section = '';    // Clear section input
      });
    } else {
      alert('Please select a course and enter a section name.');
    }
  }

  
  

  // Handle video file selection
  onFileChange(event: any, section: any, fileType: string) {
    const file = event.target.files[0];
    if (file) {
      if (fileType === 'video') {
        section.videoFile = file;
      } else if (fileType === 'pdf') {
        section.pdfFile = file;
      }
    }
  }

  // Add video to the section
  addVideoToSection(section: any, index: number) {
    if (section.videoTitle && section.videoFile) {
      
      section.videos = section.videos || [];
      section.videos.push({
        title: section.videoTitle,
        file: section.videoFile,
      });
      section.videoTitle = ''; // Reset video title field
      section.videoFile = null; // Reset video file field
    }
  }
  // addVideoToSection(section: any, index: number) {
  //   if (section.videoTitle && section.videoFile) {
  
  //     section.videos = section.videos || [];
  //     section.videos.push({
  //       title: section.videoTitle,
  //       file: section.videoFile.name  // Save the file name, not the file object
  //     });
  
  //     // Prepare FormData with correct file handling
  //     const formData = new FormData();
  //   formData.append('section', section._id);    // Use section ID from backend
  //   formData.append('videoName', section.videoTitle); 
  //   formData.append('video', section.videoFile);  // Append the actual file
  //   formData.append('type', 'video');
  //     // Debug: log form data entries
  //     // for (let pair of formData.entries()) {
  //     //   console.log(pair[0], pair[1]);
  //     // }
  //     console.log(formData)

  
  //     this.mainserve.addvideo(formData).subscribe(
  //       (res: any) => {
  //         alert('Video added successfully');
  //         section.videoTitle = '';     // Reset video title
  //         section.videoFile = null;    // Reset video file
  //       }
  //     );
  //   } else {
  //     alert('Please fill in both the video title and select a file.');
  //   }
  // }
  



  // Add PDF to the section
  addPdfToSection(section: any, index: number) {
    if (section.pdfTitle && section.pdfFile) {
      section.pdfs = section.pdfs || [];
      section.pdfs.push({
        title: section.pdfTitle,
        file: section.pdfFile,
      });
      section.pdfTitle = ''; // Reset PDF title field
      section.pdfFile = null; // Reset PDF file field
    }
  }

  toggleAssignment(index: number) {
    this.sections[index].showAssignment = !this.sections[index].showAssignment;
  }
  
  addAssignmentToSection(section: any) {
    if (section.assignmentTopic && section.assignmentAnswers) {
      section.assignments = section.assignments || [];
      section.assignments.push({
        topic: section.assignmentTopic,
        answers: section.assignmentAnswers,
      });
      section.assignmentTopic = ''; // Clear the topic input
      section.assignmentAnswers = ''; // Clear the answers input
    }
  }

  toggleQuiz(index: number) {
    this.sections[index].showQuiz = !this.sections[index].showQuiz;

    // Ensure the sectionId is passed to the child component
    this.sections[index].sectionId = this.sections[index]._id; 
    }

  // Save all sections
  saveAllSections() {
    console.log('Saving all sections:', this.sections);
    // Add your save logic here (e.g., send data to an API)
  }
 AddQuestionpaper(){
  this.hide=!this.hide
 }

 oncoursechange(){
  this.mainserve.viewcoursebyid(this.id).subscribe((res:any)=>{
    this.course=res
  })

 }
}
