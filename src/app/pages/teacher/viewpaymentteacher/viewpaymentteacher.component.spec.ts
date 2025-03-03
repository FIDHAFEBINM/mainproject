import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentteacherComponent } from './viewpaymentteacher.component';

describe('ViewpaymentteacherComponent', () => {
  let component: ViewpaymentteacherComponent;
  let fixture: ComponentFixture<ViewpaymentteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewpaymentteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpaymentteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
