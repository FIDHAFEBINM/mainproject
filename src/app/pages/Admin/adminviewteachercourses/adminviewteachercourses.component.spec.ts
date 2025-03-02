import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewteachercoursesComponent } from './adminviewteachercourses.component';

describe('AdminviewteachercoursesComponent', () => {
  let component: AdminviewteachercoursesComponent;
  let fixture: ComponentFixture<AdminviewteachercoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewteachercoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewteachercoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
