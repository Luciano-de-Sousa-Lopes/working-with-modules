import { Component, Input, OnInit, ElementRef } from '@angular/core';

interface DataModel {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  currentItem: number = 0;
  @Input() data: DataModel[] = [];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  openItem(index: number) {
    if (this.currentItem === index) {
      this.currentItem = -1;
      this.elementRef.nativeElement.classList.toggle('active');
    } else {
      this.currentItem = index;
      this.elementRef.nativeElement.classList.toggle('active');
    }
  }
}
