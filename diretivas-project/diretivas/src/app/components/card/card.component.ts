import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = [];
  @Input() novoProduto: string = "";
  MenuType: string = "";

  LayoutUser: string[] = [];
  LayoutAdmim: string[] = [];
  LayoutSuper_User: string[] = [];
  //Criando event Binding para mostrar o P
  PisAlive = false;
  mostrarP(){
    this.PisAlive = true
  }
  //Criando event Binding para retirar o P
  tirarP(){
    this.PisAlive = false;
  }
  constructor() {

    this.LayoutUser = [
      "Adicionar foto",
      "Remover foto",
      "Editar Perfil",
      "Excluir Perfil"
    ]

    this.LayoutAdmim = [
      "Adicionar foto",
      "Remover foto",
      "Editar Perfil",
      "Excluir Perfil",
      "Cancelar Conta User",
      "Gerenciar User"
    ]

    this.LayoutSuper_User = [
      "Adicionar foto",
      "Remover foto",
      "Editar Perfil",
      "Excluir Perfil",
      "Cancelar Conta User",
      "Gerenciar User",
      "Gerenciar Admins",
      "Editar Código-Fonte"
    ]
  }

  Accessuser(): void{
    this.MenuType = "user";
  }

  Accessadmim(): void{
    this.MenuType = "admim";
  }

  Accesssuperuser(): void{
    this.MenuType = "super_user";
  }


  adicionar() {
    this.produtos.push(this.novoProduto);
    this.novoProduto = "";
  }

  removerFinal() {
    this.produtos.pop();
  }

  removeForTouch(index: number){
    this.produtos.splice(index, 1);
  }
}
