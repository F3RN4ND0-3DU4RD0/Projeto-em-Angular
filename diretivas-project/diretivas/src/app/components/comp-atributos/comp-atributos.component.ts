import { style } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnDestroy {

  estilo: string = "disable";
  listaDeCompras: string[] = [];
  novoProduto: string = "";
  IsAliveModel: boolean = false;
  CompraFinalizada: boolean = true;


  //Método para adicionar produtos na listaDeCompras
  adicionarProdutosLista() {
    //Adicionando novos produtos a lista
    if (this.novoProduto === "") {
      alert("É necessário adicionar um produto!");
    } else {
      this.listaDeCompras.push(this.novoProduto);
      this.novoProduto = "";
      this.estilo = "enable";
    }
    //Mostrando o caminho para FINALIZAR COMPRA
    if (this.listaDeCompras.length != 0) {
      this.IsAliveModel = true;
    } else {
      this.IsAliveModel = false;
    }

  }

  //Mostrando no console que este componente foi finalizado
  ngOnDestroy(){
    console.log("Componente Atributos está finalizado");
  }

  finalizaCompra(){
    this.CompraFinalizada = false;
  }


}
