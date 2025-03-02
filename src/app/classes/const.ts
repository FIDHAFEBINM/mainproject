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