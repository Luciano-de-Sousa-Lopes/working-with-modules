import { Component, Input, OnInit } from '@angular/core';

interface AccordionModel {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() quiz: AccordionModel[] = [];
  openedItemIndex: number = 0;
  constructor() {}

  ngOnInit(): void {}

  openItem(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
