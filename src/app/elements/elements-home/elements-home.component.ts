import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.css'],
})
export class ElementsHomeComponent implements OnInit {
  header: boolean = true;
  paragraph: boolean = true;
  headerLines: number = 3;
  paragraphLines: number = 5;
  constructor() {}

  ngOnInit(): void {}
}
