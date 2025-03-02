import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredteacherComponent } from './registeredteacher.component';

describe('RegisteredteacherComponent', () => {
  let component: RegisteredteacherComponent;
  let fixture: ComponentFixture<RegisteredteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
