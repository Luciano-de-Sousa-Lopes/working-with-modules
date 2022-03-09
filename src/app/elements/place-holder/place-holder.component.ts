import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css'],
})
export class PlaceHolderComponent implements OnInit {
  @Input() headerLines = 0;
  @Input() paragraphLines = 0;
  @Input() paragraphs = 0;
  @Input() header = true;

  constructor() {}

  ngOnInit(): void {}
}
