import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerObvComponent } from './timer-obv.component';

describe('TimerObvComponent', () => {
  let component: TimerObvComponent;
  let fixture: ComponentFixture<TimerObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerObvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
