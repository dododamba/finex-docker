import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseUpdateComponent } from './entreprise-update/entreprise-update.component';
import { EntrepriseCreateComponent } from './entreprise-create/entreprise-create.component';
import { EntrepriseShowComponent } from './entreprise-show/entreprise-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { entrepriseRoutes } from './entreprise.routes';



@NgModule({
  declarations: [EntrepriseComponent, EntrepriseListComponent, EntrepriseUpdateComponent, EntrepriseCreateComponent, EntrepriseShowComponent, ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(entrepriseRoutes)
  ]
})
export class EntrepriseModule { }
