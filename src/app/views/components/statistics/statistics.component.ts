import { Component, OnInit, Input } from '@angular/core';

interface DataModel {
  value: number;
  label: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  @Input() data: DataModel[] = [];
  constructor() {}

  ngOnInit(): void {}
}
