import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompHomeComponent } from './comp-home/comp-home.component';



@NgModule({
  declarations: [
    CompHomeComponent
  ],
  exports: [
    CompHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
