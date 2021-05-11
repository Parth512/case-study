import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownTimerObvComponent } from './count-down-timer-obv.component';

describe('CountDownTimerObvComponent', () => {
  let component: CountDownTimerObvComponent;
  let fixture: ComponentFixture<CountDownTimerObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownTimerObvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownTimerObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
