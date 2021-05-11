import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsObvComponent } from './logs-obv.component';

describe('LogsObvComponent', () => {
  let component: LogsObvComponent;
  let fixture: ComponentFixture<LogsObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsObvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
