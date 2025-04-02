import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  registerpost(obj:any){
    return this.http.post('http://localhost:3000/user/register',obj,{headers: { 'Content-Type': 'application/json' }})
    

  }

  loginpost(obj:any){
    return this.http.post('http://localhost:3000/user/login',obj,{headers: { 'Content-Type': 'application/json' }})
  }
  // teacher-------------------------------------------------------------------------------------------------------------------------

  teacherregisterpost(obj:any,id:string){
    return this.http.post('http://localhost:3000/teacher/register/'+id,obj)
  }

  teacherregisterupdate(obj:any,id:string){
    return this.http.put('http://localhost:3000/teacher/updateteacher/'+id,obj)
  }

  viewteacher(id:string){
    return this.http.get('http://localhost:3000/teacher/viewteacher/'+id)
  }
  teacherdescription(obj:any,id:any){
    return this.http.post('http://localhost:3000/teacherdescribe/description/'+id,obj,{headers: { 'Content-Type': 'application/json' }})
  }

  viewtaecherdescription(id:any){
    return this.http.get('http://localhost:3000/teacherdescribe/viewdescription/'+id)
  }
  updateteacherdescription(obj:any,id:any){
    return this.http.put('http://localhost:3000/teacherdescribe/description/'+id,obj)

  }

  // course-------------------------------------------------------------------------------------------------------------
  addcourse(obj:any,id:string){
    return this.http.post('http://localhost:3000/courses/addcourse/'+id,obj) 
  }
  viewcoursebyid(id:String){
    return this.http.get('http://localhost:3000/courses/viewcoursebyid/'+id)
  }

  viewCourse(){
    return this.http.get('http://localhost:3000/courses/viewcourses')
  }
  viewcourseid(id:any){
    return this.http.get('http://localhost:3000/courses/viewcoureid/'+id,{headers: { 'Content-Type': 'application/json' }})
  }

  viewcoursebycategoryid(id:any){
    return this.http.get('http://localhost:3000/courses/viewcoursebycategoryid/'+id)
  }

  // category------------------------------------------------------------------------------------------------------------
  viewcategory(){
    return this.http.get('http://localhost:3000/subcategory/viewsubcategory')
  }
  // price---------------------------------------------------------------------------------------------------------------
  viewprice(){
    return this.http.get('http://localhost:3000/adminprice/getprice')
  }
  // section---------------------------------------------------------------------------------------------------------------

  addsection(obj:any){
    return this.http.post('http://localhost:3000/sectionser/addsection',obj)
  }

  addvideo(obj:any){
    return this.http.post('http://localhost:3000/videos/addvideos',obj)
  }


  addmcq(obj:any){
    return this.http.post('http://localhost:3000/mcq/addmcq',obj)
  }

  // review-----------------------------------------------------------------------------------------------------------------------

  viewreviewbyid(id:any){
    return this.http.get('http://localhost:3000/review/'+id)
  }
  viewreviewbyteacherid(id:any){
    return this.http.get('http://localhost:3000/review/get/'+id)
  }
  addreview(obj:any){
    return this.http.post('http://localhost:3000/review',obj)
  }


  //cart---------------------------------------------------------------------------------------------------------------------------------

  addcart(obj:any){
    return this.http.post('http://localhost:3000/cart/add',obj)
  }

  viewcart(id:string){
    return this.http.get('http://localhost:3000/cart/view/'+id)
  }

  deletecart(id:string){
    return this.http.delete('http://localhost:3000/cart/remove/'+id)

  }

  //-sectionses----------------------------------------------------------------------------------------------------------------------------

  getSections(){
    return this.http.get('http://localhost:3000/sections')
  }

  createSection(formData: FormData){
    return this.http.post('http://localhost:3000/sections', formData);
  }

  deleteSection(id: string){
    return this.http.delete('http://localhost:3000/sections/'+id)
  }

  sectionbycourseid(id:any){
    return this.http.get('http://localhost:3000/sections/sectioncourse/'+id)
  }

  //assignment-------------------------------------------------------------------------------------------------------------------------
  addAssignment(obj:any){
    return this.http.post('http://localhost:3000/teacherassignment/add',obj)

  }
  

  // -----------------------------------------------------------------------------------------------------------------------

  // viewCourses(id:string) {
  //   return this.http.get('http://localhost:3000/courses/viewcoursebyid/'+id);
  // }

  // uploadMultipleFiles(sectionId: string, formData: FormData){
  //   return this.http.post(`http://localhost:3000/sectionses/${sectionId}/upload-multiple`, formData);
  // }

  // viewSectionsByCourse(courseId: string) {
  //   return this.http.get(`http://localhost:3000/sectionses/${courseId}`);
  // }

}
 