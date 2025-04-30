import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherviewreviewComponent } from './teacherviewreview.component';

describe('TeacherviewreviewComponent', () => {
  let component: TeacherviewreviewComponent;
  let fixture: ComponentFixture<TeacherviewreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherviewreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherviewreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
