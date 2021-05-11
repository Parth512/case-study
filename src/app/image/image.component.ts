import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @ViewChild("rootBox", {
    static: true
  })
  rootBox: ElementRef<HTMLElement>;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    const width = 700;
    const height = 200;
    const text = "A floating banner text which keeps on rotatin";
    this.rootBox.nativeElement.style.width = width + "px";
    this.rootBox.nativeElement.style.height = height + "px";
    this.createBoxes(
      7,
      width - 30,
      height - 30,
      this.rootBox.nativeElement,
      text
    );
  }

  createBoxes(
    n: number,
    width: number,
    height: number,
    box: HTMLElement,
    text: string
  ) {
    if (n === 1) {
      box.innerText = text;
      box.style.display = "flex";
      box.style.justifyContent = "center";
      box.style.alignItems = "center";
      return;
    }
    const newBox = this.render.createElement("div");
    newBox.style.cssText = `
    border: 2px solid;
    position: absolute;
    left: 50%;
    top: 50%;
    font-weight: 500;
    transform: translate(-50%, -50%);
    font-size: 20px;
    height: ${height}px;
    width: ${width}px;
  `;
    box.appendChild(newBox);
    this.createBoxes(n - 1, width - 30, height - 30, newBox, text);
  }

}
