import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlandingcontetComponent } from './adminlandingcontet.component';

describe('AdminlandingcontetComponent', () => {
  let component: AdminlandingcontetComponent;
  let fixture: ComponentFixture<AdminlandingcontetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminlandingcontetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlandingcontetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
