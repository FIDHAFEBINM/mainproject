import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosecategoryComponent } from './choosecategory.component';

describe('ChoosecategoryComponent', () => {
  let component: ChoosecategoryComponent;
  let fixture: ComponentFixture<ChoosecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosecategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
