import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SousSecteurComponent} from './sous-secteur.component';
import {SousSecteurListComponent} from './sous-secteur-list/sous-secteur-list.component';
import {SousSecteurUpdateComponent} from './sous-secteur-update/sous-secteur-update.component';
import {SousSecteurShowComponent} from './sous-secteur-show/sous-secteur-show.component';
import {SousSecteurEditComponent} from './sous-secteur-edit/sous-secteur-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {soussecteurRoutes} from './sous-secteur.routes';


@NgModule({
    declarations: [SousSecteurComponent, SousSecteurListComponent, SousSecteurUpdateComponent, SousSecteurShowComponent, SousSecteurEditComponent],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(soussecteurRoutes)
    ]
})
export class SousSecteurModule {
}
