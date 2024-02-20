import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResidanceComponent } from './form-residance.component';

describe('FormResidanceComponent', () => {
  let component: FormResidanceComponent;
  let fixture: ComponentFixture<FormResidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormResidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormResidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
