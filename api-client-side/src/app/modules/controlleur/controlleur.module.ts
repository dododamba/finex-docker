import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ControlleurComponent} from './controlleur.component';
import {ControlleurListComponent} from './controlleur-list/controlleur-list.component';
import {ControlleurCreateComponent} from './controlleur-create/controlleur-create.component';
import {ControlleurUpdateComponent} from './controlleur-update/controlleur-update.component';
import {ControlleurShowComponent} from './controlleur-show/controlleur-show.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {controlleurRoutes} from './controlleur.routes';


@NgModule({
    declarations: [ControlleurComponent, ControlleurListComponent, ControlleurCreateComponent, ControlleurUpdateComponent, ControlleurShowComponent],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(controlleurRoutes)
    ]
})
export class ControlleurModule {
}
