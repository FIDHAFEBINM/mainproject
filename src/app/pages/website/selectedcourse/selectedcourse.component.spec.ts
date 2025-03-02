import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcourseComponent } from './selectedcourse.component';

describe('SelectedcourseComponent', () => {
  let component: SelectedcourseComponent;
  let fixture: ComponentFixture<SelectedcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedcourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
