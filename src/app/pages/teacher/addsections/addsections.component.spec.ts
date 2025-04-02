import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsectionsComponent } from './addsections.component';

describe('AddsectionsComponent', () => {
  let component: AddsectionsComponent;
  let fixture: ComponentFixture<AddsectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddsectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
