import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycourseComponent } from './buycourse.component';

describe('BuycourseComponent', () => {
  let component: BuycourseComponent;
  let fixture: ComponentFixture<BuycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuycourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
