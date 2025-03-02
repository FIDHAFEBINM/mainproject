import { Component } from '@angular/core';
import { CategoryviewComponent } from "../../categoryview/categoryview.component";
import { FilterComponent } from "../filter/filter.component";
import { CategorycourseComponent } from "../categorycourse/categorycourse.component";

@Component({
  selector: 'app-allcourse',
  standalone: true,
  imports: [CategoryviewComponent, FilterComponent, CategorycourseComponent],
  templateUrl: './allcourse.component.html',
  styleUrl: './allcourse.component.css'
})
export class AllcourseComponent {

}
