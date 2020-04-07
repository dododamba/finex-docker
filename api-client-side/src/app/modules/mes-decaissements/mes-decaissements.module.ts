import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MesDecaissementComponent} from './mes-decaissement.component';
import {RouterModule} from '@angular/router';
import {decaissementRoutes} from './decaissement.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MesDecaissementsListComponent} from './mes-decaissements-list/mes-decaissements-list.component';
import {MesDecaissementsCreateComponent} from './mes-decaissements-create/mes-decaissements-create.component';
import {MesDecaissementsDetailComponent} from './mes-decaissements-detail/mes-decaissements-detail.component';


@NgModule({
    declarations: [MesDecaissementComponent, MesDecaissementsListComponent, MesDecaissementsCreateComponent, MesDecaissementsDetailComponent],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(decaissementRoutes)
    ]
})
export class MesDecaissementsModule {
}
