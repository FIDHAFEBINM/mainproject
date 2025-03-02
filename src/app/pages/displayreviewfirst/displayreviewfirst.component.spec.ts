import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayreviewfirstComponent } from './displayreviewfirst.component';

describe('DisplayreviewfirstComponent', () => {
  let component: DisplayreviewfirstComponent;
  let fixture: ComponentFixture<DisplayreviewfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayreviewfirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayreviewfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
