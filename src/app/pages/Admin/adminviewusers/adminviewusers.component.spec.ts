import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewusersComponent } from './adminviewusers.component';

describe('AdminviewusersComponent', () => {
  let component: AdminviewusersComponent;
  let fixture: ComponentFixture<AdminviewusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
