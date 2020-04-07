import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleComponent } from './controle.component';
import { ControleListComponent } from './controle-list/controle-list.component';
import { ControleCreateComponent } from './controle-create/controle-create.component';
import { ControleUpdateComponent } from './controle-update/controle-update.component';
import { ControleShowComponent } from './controle-show/controle-show.component';



@NgModule({
  declarations: [ControleComponent, ControleListComponent, ControleCreateComponent, ControleUpdateComponent, ControleShowComponent],
  imports: [
    CommonModule
  ]
})
export class ControleModule { }
