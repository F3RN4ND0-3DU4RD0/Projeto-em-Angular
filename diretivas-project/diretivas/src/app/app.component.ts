import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  isAliveCard = true;
  sumirComp: boolean = true;
  cachorro: boolean = true;

  finalizaCompra(){
    this.sumirComp = false;
  }
}
