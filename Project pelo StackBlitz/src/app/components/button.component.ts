import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class Button {
  @Input() label: string;
  buttonText: string = 'Chamada';
  buttonTexts: string[] = ['VENDER','COMPRAR'];
  buttonNumber: number = 2;
  buttonObject = {
    label: 'adicionar ao carrinho',
  };

    getAlert(){
      alert(this.label);
    }
}
