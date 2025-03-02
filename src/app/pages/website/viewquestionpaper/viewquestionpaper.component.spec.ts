import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewquestionpaperComponent } from './viewquestionpaper.component';

describe('ViewquestionpaperComponent', () => {
  let component: ViewquestionpaperComponent;
  let fixture: ComponentFixture<ViewquestionpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewquestionpaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
