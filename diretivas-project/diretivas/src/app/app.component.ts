import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  isAliveCard = true;
  ComprasFinalizada: boolean = true;
  isDead:boolean = true;
  isAliveImage: boolean = false;

  removerApp(){
    this.isAliveCard = false;
  }

  removeTudo(){
    this.isDead = false;
  }

  terminarCompra(){
    this.ComprasFinalizada = false;
    this.isAliveImage = true;
  }
}
