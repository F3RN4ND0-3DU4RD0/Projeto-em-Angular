import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name: string = "CHARMANDER";
  attributesTypes: string[] = [
    'FIRE',
    'WIND'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
