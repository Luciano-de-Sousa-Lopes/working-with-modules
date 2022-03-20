import { Component, OnInit, Input } from '@angular/core';

interface DataModel {
  title: string;
  description: string;
  image: string;
  additionalDetails: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  @Input() data: DataModel[] = [];

  constructor() {}

  ngOnInit(): void {}
}
