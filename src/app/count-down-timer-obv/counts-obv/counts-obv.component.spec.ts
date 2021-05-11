import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountsObvComponent } from './counts-obv.component';

describe('CountsObvComponent', () => {
  let component: CountsObvComponent;
  let fixture: ComponentFixture<CountsObvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountsObvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountsObvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
