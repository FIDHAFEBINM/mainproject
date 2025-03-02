import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcourseeditComponent } from './selectedcourseedit.component';

describe('SelectedcourseeditComponent', () => {
  let component: SelectedcourseeditComponent;
  let fixture: ComponentFixture<SelectedcourseeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedcourseeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedcourseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
