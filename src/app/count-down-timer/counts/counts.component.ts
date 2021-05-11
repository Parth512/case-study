import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counts',
  templateUrl: './counts.component.html',
  styleUrls: ['./counts.component.scss']
})
export class CountsComponent implements OnInit {

  @Input() startCount = 0;
  @Input() pauseCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
