import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachernavfooterComponent } from './teachernavfooter.component';

describe('TeachernavfooterComponent', () => {
  let component: TeachernavfooterComponent;
  let fixture: ComponentFixture<TeachernavfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachernavfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeachernavfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
