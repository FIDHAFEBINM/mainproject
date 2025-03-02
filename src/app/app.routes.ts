import { Routes } from '@angular/router';
import { LandingComponent } from './pages/website/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewingComponent } from './pages/website/viewing/viewing.component';
import { RegisterComponent } from './pages/register/register.component';
import { SelectedcourseComponent } from './pages/website/selectedcourse/selectedcourse.component';
import { CoursesComponent } from './pages/website/courses/courses.component';
import { CartComponent } from './pages/website/cart/cart.component';
import { CategorycourseComponent } from './pages/website/categorycourse/categorycourse.component';
import { CategoryviewComponent } from './pages/categoryview/categoryview.component';
import { VideoComponent } from './pages/video/video.component';
import { LandingteacherComponent } from './pages/teacher/landingteacher/landingteacher.component';
import { DemoComponent } from './pages/teacher/demo/demo.component';
import { FilterComponent } from './pages/website/filter/filter.component';
import { TeachernavfooterComponent } from './pages/teacher/teachernavfooter/teachernavfooter.component';
import { CourseaddComponent } from './pages/teacher/courseadd/courseadd.component';
import { SelectedteachercourseComponent } from './pages/teacher/selectedteachercourse/selectedteachercourse.component';
import { SelectedcourseeditComponent } from './pages/teacher/selectedcourseedit/selectedcourseedit.component';
import { RegisteredteacherComponent } from './pages/teacher/registeredteacher/registeredteacher.component';
import { ViewquestionpaperComponent } from './pages/website/viewquestionpaper/viewquestionpaper.component';
import { AdminlandingComponent } from './pages/Admin/adminlanding/adminlanding.component';
import { AdminlandingcontetComponent } from './pages/Admin/adminlandingcontet/adminlandingcontet.component';
import { ViewteachersComponent } from './pages/Admin/viewteachers/viewteachers.component';
import { AdminviewteachercoursesComponent } from './pages/Admin/adminviewteachercourses/adminviewteachercourses.component';
import { AllcourseComponent } from './pages/website/allcourse/allcourse.component';
import { ViewteachercourseadminComponent } from './pages/Admin/viewteachercourseadmin/viewteachercourseadmin.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { ForgetpasswordComponent } from './pages/forgetpassword/forgetpassword.component';
import { ViewcourseComponent } from './pages/teacher/viewcourse/viewcourse.component';
import { ViewcoursesComponent } from './pages/Admin/viewcourses/viewcourses.component';
import { AdminviewusersComponent } from './pages/Admin/adminviewusers/adminviewusers.component';
import { AdminreportsComponent } from './pages/Admin/adminreports/adminreports.component';
import { TeachermonthlyreportComponent } from './pages/teacher/teachermonthlyreport/teachermonthlyreport.component';
import { AddcategoryadminComponent } from './pages/Admin/addcategoryadmin/addcategoryadmin.component';
import { UploadassignmentComponent } from './pages/website/uploadassignment/uploadassignment.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'elearn',
        pathMatch:'full'
    },

    {
        path:'',
        component:LandingComponent,
        children:[
            {
                path:'elearn',
                component:ViewingComponent,
                children:[
                    {
                        path:'course',
                        component:CoursesComponent,
                    },
                ]
            },
            {
                path:'selectedcourse',
                component:SelectedcourseComponent
            },
     
            {
                path:'cart',
                component:CartComponent
            },
            {
                path:'category',
                component:CategorycourseComponent
            },
            {
                path:'categoryview',
                component:CategoryviewComponent
            },
            {
                path:'allcourse',
                component:AllcourseComponent
            },
            {
                path:'video',
                component:VideoComponent
            },
        
            {
                path:'landing',
                component:LandingteacherComponent
            },
            {
                path:'filter',
                component:FilterComponent
            },
            {
                path:'viewquestion',
                component:ViewquestionpaperComponent
            },
            {
                path:'pdfview',
                component:PdfViewerComponent
            },
            {
                path:'assignmentupdate',
                component:UploadassignmentComponent
            }
         
          
        ]    
    }, 
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    },
    {
        path:'forgetpassword',
        component:ForgetpasswordComponent
    },
    {
        path:'teacher',
        component:TeachernavfooterComponent,
        children:[
            {
                path:'demo',
                component:DemoComponent
            },
            {
                path:'courses',
                component:CourseaddComponent,

            },
            {
                path:'registeredteacher',
                component:RegisteredteacherComponent
            },
            {
                path:'selected',
                component:SelectedteachercourseComponent
            },{
                path:'selectedEdit',
                component:SelectedcourseeditComponent
            },
            {
                path:'registeredteacher',
                component:RegisteredteacherComponent
            },
            {
                path:'teacherreport',
                component:TeachermonthlyreportComponent
            }
         
         
        ]
    },
    {
        path:'admin',
        component:AdminlandingComponent,
        children:[
            { 
                path: '', 
                redirectTo: 'adminlandingcontent', 
                pathMatch: 'full' 
            }, 

            {
                path:'manage-teachers',
                component:ViewteachersComponent
            },
            {
                path:'adminlandingcontent',
                component:AdminlandingcontetComponent
            },
            {
                path:'adminviewteachercourses',
                component:AdminviewteachercoursesComponent
            },
            {
                path:'adminviewcourses',
                component:ViewteachercourseadminComponent
            },
            {
                path:'adminviewcourses-details',
                component:ViewcoursesComponent
            },
            {
                path:'adminviewusers',
                component:AdminviewusersComponent
            },
            {
                path:'adminreports',
                component:AdminreportsComponent
            },
            {
                path:'addcategory',
                component:AddcategoryadminComponent
            }
        ]
    }

];
