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

  loginget(){
    return this.http.get('http://localhost:3000/user/viewregister')
  }
  // teacher-------------------------------------------------------------------------------------------------------------------------

  teacherregisterpost(obj:any,id:string){
    return this.http.post('http://localhost:3000/teacher/register/'+id,obj)
  }

  viewteachers(){
    return this.http.get('http://localhost:3000/teacher/viewregister')
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

  viewsubcategory(id:any){
    return this.http.get('http://localhost:3000/subcategory/viewsubcategorybyid/'+id)     

  }

  viewcategories(){
    return this.http.get('http://localhost:3000/category/viewcategory')
  }

  addcategory(obj:any){
    return this.http.post('http://localhost:3000/category/addcategory',obj)
  }

  addsubcategory(obj:any){
    return this.http.post('http://localhost:3000/subcategory/addsubcategory',obj)
  }

  updatecategory(obj:any,id:string){
    return this.http.put('http://localhost:3000/category/updatecategory/'+id,obj)
  }

  deletecategory(id:any){
    return this.http.delete('http://localhost:3000/category/deletecategory/'+id)
  }

  updatesubcategory(obj:any,id:string){
    return this.http.put('http://localhost:3000/subcategory/updatesubcategory/'+id,obj)
  }

  deletesubcategory(id:any){
    return this.http.delete('http://localhost:3000/subcategory/deletesubcategory/'+id)
  }
  // price---------------------------------------------------------------------------------------------------------------
  viewprice(){
    return this.http.get('http://localhost:3000/adminprice/getprice')
  }
  addprice(obj:any){
    return this.http.post('http://localhost:3000/adminprice/addprice',obj)
  }
  deleteprice(id:any){
    return this.http.delete('http://localhost:3000/adminprice/deleteprice/'+id)
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

  viewmcq(id:any){
    return this.http.get('http://localhost:3000/mcq/viewmcq/'+id)

  }


  checkIfQuestionsExist(sectionId: string) {
  return this.http.get<boolean>(`http://localhost:3000/api/sections/${sectionId}/has-questions`);
 }

 editquetsion(obj:any){
  return this.http.put('http://localhost:3000/mcq/mcqs/update',obj)
  
 }

 deletemcq(id:any){
  return this.http.delete('http://localhost:3000/mcq/delete/'+id)
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

  getUserReview(courseId: string, userId: string) {
    return this.http.get(`http://localhost:3000/review/reviews/${courseId}/${userId}`);
  }

  editreview(obj:any,id:any){
    return this.http.put('http://localhost:3000/review/'+id,obj)
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

  buyCourse(userId: string, courseId: string) {
    return this.http.post('http://localhost:3000/purchase/buy-course', { userId, courseId }); 
  }

  getcoursebyuserid(id:any){
    return this.http.get('http://localhost:3000/purchase/get-courses/'+id); 

  }

  checkifpurchased(userId: string, courseId: string) {
    return this.http.get(`http://localhost:3000/purchase/get/${userId}/${courseId}`);

  }

  getpurchasesbyteacherid(id:any){
    return this.http.get('http://localhost:3000/purchase/get-purchases-by-teacher/'+id)
  }

  getpurchasedbyuserid(id:any){
    return this.http.get('http://localhost:3000/purchase/user-purchases/'+id)
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

  sectionbysectionId(sectionId:any){
    return this.http.get(`http://localhost:3000/sections/section/${sectionId}/content`)
  }

  editsection(obj:any,id:any){
    return this.http.put('http://localhost:3000/sections/edit-section/'+id,obj)

  }

  //assignment-------------------------------------------------------------------------------------------------------------------------
  addAssignment(obj:any){
    return this.http.post('http://localhost:3000/teacherassignment/add',obj)

  }


  submitAssignment(obj:any){
    return this.http.post('http://localhost:3000/studentassignment/submit',obj)
  }

  viewAssignment(id:any){
    return this.http.get('http://localhost:3000/teacherassignment/'+id)
  }

  viewsubmittedassignment(id:any){
    return this.http.get('http://localhost:3000/studentassignment/'+id)  
  }

  editassignment(obj:any,id:any){
    return this.http.put('http://localhost:3000/teacherassignment/edit/'+id,obj)
  }

  deleteassignment(id:any){
    return this.http.delete('http://localhost:3000/teacherassignment/delete/'+id)
  }

  viewMySubmissions(studentId: string) {
    return this.http.get(`http://localhost:3000/studentassignment/submittedassignments?studentId=${studentId}`);
  }

  //monthlyreport-----------------------------------------------------------------------------------------------------------

  viewmonthlyreport(teacherId: string, year: number){
    return this.http.get('http://localhost:3000/purchase/teacher/monthly-report',{
      params: { teacherId, year }})
  }

  getAdminMonthlyReport( year: number){
    return this.http.get('http://localhost:3000/purchase/admin/monthly-report',{params:{ year }})

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
 