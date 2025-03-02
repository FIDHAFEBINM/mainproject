import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachermonthlyreportComponent } from './teachermonthlyreport.component';

describe('TeachermonthlyreportComponent', () => {
  let component: TeachermonthlyreportComponent;
  let fixture: ComponentFixture<TeachermonthlyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachermonthlyreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachermonthlyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
