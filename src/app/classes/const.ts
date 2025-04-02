import { DatePipe } from "@angular/common";

export class Login{
    username:string;
    password:string;
    constructor(){
        this.username='user'
        this.password='password'
    }
}
export class Register{
    registerid:number
    Name:string
    dateOfBirth:Date
    gender:string
    contactNo:string
    email:string

    constructor(){
        this.registerid=0
        this.Name=''
        this.dateOfBirth=new Date()
        this.gender=''
        this.contactNo=''
        this.email=''
    }

}

export interface Video {
    title: string;
    file: File | null;
  }
  
  export interface Pdf {
    title: string;
    file: File | null;
  }
  
  export interface Assignment {
    topic: string;
    answers: string;
  }
  
  export interface Section {
    _id?: string;
    course: string;
    name: string;
    videos: Video[];
    pdfs: Pdf[];
    assignments?: Assignment[];
    showQuiz?: boolean;
    showAssignment?: boolean;
    videoTitle?: string;
    videoFile?: File |null;
    pdfTitle?: string;
    pdfFile?: File | null;
    assignmentTopic?: string;
    assignmentAnswers?: string;
  }
  