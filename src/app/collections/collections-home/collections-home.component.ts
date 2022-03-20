import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  tableData = [
    { name: 'James', age: 24, job: 'Engineer', hasJob: 'yes' },
    { name: 'Jill', age: 26, job: 'Engineer', hasJob: 'yes' },
    { name: 'Elyse', age: 24, job: 'Designer', hasJob: 'no' },
  ];

  tableHeaders = [
    { key: 'name', label: 'Name' },
    { key: 'job', label: 'Job' },
    { key: 'age', label: 'Age' },
    { key: 'hasJob', label: 'Has Job' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
