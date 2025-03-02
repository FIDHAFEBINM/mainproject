import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedteachercourseComponent } from './selectedteachercourse.component';

describe('SelectedteachercourseComponent', () => {
  let component: SelectedteachercourseComponent;
  let fixture: ComponentFixture<SelectedteachercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedteachercourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedteachercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
