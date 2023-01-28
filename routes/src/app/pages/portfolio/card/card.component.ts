import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private receptorParams: ActivatedRoute,
    private tempoParaVoltar: Router
    ) {

    this.receptorParams.params.subscribe(
      id => console.log(id)
    );

    this.receptorParams.firstChild?.params.subscribe(
      identificador => console.log(identificador)
    );

    this.receptorParams.queryParams.subscribe(
      res => console.log(res)
    )
   }


  ngOnInit(): void {
   // setInterval(() => {this.tempoParaVoltar.navigate(['/'])},5000)
  }

}
