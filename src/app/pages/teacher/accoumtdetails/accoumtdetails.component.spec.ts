import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoumtdetailsComponent } from './accoumtdetails.component';

describe('AccoumtdetailsComponent', () => {
  let component: AccoumtdetailsComponent;
  let fixture: ComponentFixture<AccoumtdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccoumtdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccoumtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
