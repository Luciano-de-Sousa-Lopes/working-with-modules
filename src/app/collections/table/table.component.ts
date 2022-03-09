import { Component, OnInit, Input } from '@angular/core';

interface TableDataModel {
  name: string;
  age: string;
  job: string;
}

interface TableLabelModel {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableData: any = [];
  @Input() tableLabel: any = [];
  @Input('class') classNames: string = '';

  constructor() {}

  ngOnInit(): void {}
}
