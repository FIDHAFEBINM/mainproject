import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorycourseComponent } from './categorycourse.component';

describe('CategorycourseComponent', () => {
  let component: CategorycourseComponent;
  let fixture: ComponentFixture<CategorycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorycourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
