import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent implements OnInit {
  @Input() headerLines = 1;
  @Input() paragraphLines = 3;
  @Input() header = true;
  @Input() paragraph = true;
  constructor() {}

  ngOnInit(): void {}
}
