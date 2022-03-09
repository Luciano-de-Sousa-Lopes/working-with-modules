import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics = [
    { value: 22, label: 'Faves' },
    { value: 31200, label: 'Views' },
    { value: 375, label: 'Members' },
  ];

  itemList = [
    {
      title: 'Couch',
      imageUrl: '../../assets/images/couch.jpeg',
      description: 'This is a good couch to sit on.',
      extra: `Sofá é uma peça de mobília onde as pessoas se sentam e/ou deitam.
       O divã é uma espécie de sofá muito usado na sessões de psicanálise freudianas.`,
    },
    {
      title: 'Dresser',
      imageUrl: '../../assets/images/dresser.jpeg',
      description: 'That is a nice looking dresser to put stuff in.',
      extra: `chest of drawers, also called (especially in North American English) a dresser or a bureau, 
      is a type of cabinet (a piece of furniture) that has multiple parallel, horizontal drawers generally
      stacked one above another. In American English a dresser is a piece of furniture, usually waist high,
      that has drawers and normally room for a mirror. In British English a dresser or a Welsh dresser
      has shelves in the upper section for storing or displaying tableware.[1]`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
