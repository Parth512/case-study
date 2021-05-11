import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-div-creation',
  templateUrl: './dynamic-div-creation.component.html',
  styleUrls: ['./dynamic-div-creation.component.scss']
})
export class DynamicDivCreationComponent implements OnInit {

  @ViewChild("mainDiv", {
    static: true
  })
  mainDiv: ElementRef<HTMLElement>;

  @ViewChild('mainDiv', { static: false }) scrollFrame: ElementRef;
  private scrollContainer: any;
  private isNearBottom = true;

  btnCounter = 1;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.createDiv();
    this.createDiv();
    this.createDiv();
    this.createDiv();
  }

  createDiv() {
    const newBox = this.renderer.createElement("div");
    const button = this.renderer.createElement('button');
    const buttonText = this.renderer.createText('Click me');
    this.renderer.setProperty(button, "id", this.btnCounter);
    this.renderer.appendChild(button, buttonText);
    newBox.appendChild(button);
    this.renderer.listen(button, 'click', (event) => this.showAlert(event));
    newBox.style.cssText = `
    height : 200px;
    width : 200px;
    border: 1px solid black;
  `;
    this.mainDiv.nativeElement.appendChild(newBox);
    this.btnCounter++;
  }

  showAlert(event) {
    alert(`Button in ${event.target.id} div clicked`);
  }  

  scrollEnd() {
    this.createDiv();
  }

}
