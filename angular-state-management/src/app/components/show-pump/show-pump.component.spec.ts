import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPumpComponent } from './show-pump.component';

describe('ShowPumpComponent', () => {
  let component: ShowPumpComponent;
  let fixture: ComponentFixture<ShowPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
