import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpurchasedcoursesComponent } from './viewpurchasedcourses.component';

describe('ViewpurchasedcoursesComponent', () => {
  let component: ViewpurchasedcoursesComponent;
  let fixture: ComponentFixture<ViewpurchasedcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpurchasedcoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpurchasedcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
