import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  statistics = [
    { value: 22, label: 'Faves' },
    { value: 31.2, label: 'Views' },
    { value: 25, label: 'Members' },
  ];

  itemList = [
    {
      title: 'Couch',
      description:
        'This is a great couch, the kind that you would want in your house!',
      image: '../../../../assets/images/couch.jpeg',
      additionalDetails: `Sofá é uma peça de mobília onde as pessoas se sentam e/ou deitam.
         O divã é uma espécie de sofá muito usado na sessões de psicanálise freudianas.`,
    },
    {
      title: 'Dresser',
      description:
        'This is a great couch, the kind that you would want in your house!',
      image: '../../../../assets/images/dresser.jpeg',
      additionalDetails: `Traduzido do inglês-Uma cômoda, também chamada de cômoda ou escrivaninha, 
      é um tipo de armário que possui várias gavetas horizontais paralelas, geralmente empilhadas umas 
      sobre as outras. No inglês americano, uma cômoda é uma peça de mobiliário,
       geralmente na altura da cintura, que tem gavetas e normalmente espaço para um espelho. `,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
