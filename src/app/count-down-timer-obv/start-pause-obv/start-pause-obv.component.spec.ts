import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPauseObvComponent } from './start-pause-obv.component';

describe('StartPauseObvComponent', () => {
  let component: StartPauseObvComponent;
  let fixture: ComponentFixture<StartPauseObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPauseObvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPauseObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
