import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcategoryadminComponent } from './addcategoryadmin.component';

describe('AddcategoryadminComponent', () => {
  let component: AddcategoryadminComponent;
  let fixture: ComponentFixture<AddcategoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcategoryadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcategoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
