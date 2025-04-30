import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentanswerComponent } from './assignmentanswer.component';

describe('AssignmentanswerComponent', () => {
  let component: AssignmentanswerComponent;
  let fixture: ComponentFixture<AssignmentanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignmentanswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignmentanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
