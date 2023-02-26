import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerResetComponent } from './customer-reset.component';

describe('CustomerResetComponent', () => {
  let component: CustomerResetComponent;
  let fixture: ComponentFixture<CustomerResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerResetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
