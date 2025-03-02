import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewteachercourseadminComponent } from './viewteachercourseadmin.component';

describe('ViewteachercourseadminComponent', () => {
  let component: ViewteachercourseadminComponent;
  let fixture: ComponentFixture<ViewteachercourseadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewteachercourseadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewteachercourseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
