import {
  Directive, EventEmitter, HostListener, Output
}
  from '@angular/core';


@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {

  @Output() scrollEnd = new EventEmitter<any>();

  @HostListener('scroll', ['$event'])
  onScroll(event) {
    let tracker = event.target;

    let limit = tracker.scrollHeight - tracker.clientHeight;    
    if (event.target.scrollTop === limit) {
      this.scrollEnd.emit();
    }
  }

  constructor() {
  }
}