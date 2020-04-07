import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SecteurComponent} from './secteur.component';
import {SecteurListComponent} from './secteur-list/secteur-list.component';
import {SecteurCreateComponent} from './secteur-create/secteur-create.component';
import {SecteurUpdateComponent} from './secteur-update/secteur-update.component';
import {SecteurEditComponent} from './secteur-edit/secteur-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {secteurRoutes} from './secteur.routes';
import {SecteurShowComponent} from './secteur-show/secteur-show.component';


@NgModule({
    declarations: [SecteurComponent, SecteurListComponent, SecteurCreateComponent, SecteurUpdateComponent, SecteurEditComponent, SecteurShowComponent],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(secteurRoutes)
    ]
})
export class SecteurModule {
}
