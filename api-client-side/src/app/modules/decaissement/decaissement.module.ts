import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DecaissementComponent} from './decaissement.component';
import {DecaissementListComponent} from './decaissement-list/decaissement-list.component';
import {DecaissementDetailComponent} from './decaissement-detail/decaissement-detail.component';
import {DecaissementUpdateComponent} from './decaissement-update/decaissement-update.component';
import {DecaissementCreateComponent} from './decaissement-create/decaissement-create.component';
import {RouterModule} from '@angular/router';
import {decaissementRoutes} from './decaissement.routes';

@NgModule({
    declarations: [DecaissementComponent, DecaissementListComponent, DecaissementDetailComponent, DecaissementUpdateComponent, DecaissementCreateComponent],
    imports: [
        CommonModule, RouterModule.forChild(decaissementRoutes)
    ]
})
export class DecaissementModule {
}
