import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingteacherComponent } from './landingteacher.component';

describe('LandingteacherComponent', () => {
  let component: LandingteacherComponent;
  let fixture: ComponentFixture<LandingteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
