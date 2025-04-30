import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpricingComponent } from './addpricing.component';

describe('AddpricingComponent', () => {
  let component: AddpricingComponent;
  let fixture: ComponentFixture<AddpricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpricingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
