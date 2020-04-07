import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MesFinancementsListComponent} from './mes-financements-list/mes-financements-list.component';
import {MesFinancementsDetailComponent} from './mes-financements-detail/mes-financements-detail.component';
import {MesFinancementsComponent} from './mes-financements.component';
import {RouterModule} from '@angular/router';
import {mesFinancementsRoutes} from './mes-financements.routes';


@NgModule({
    declarations: [MesFinancementsListComponent, MesFinancementsDetailComponent, MesFinancementsComponent],
    imports: [
        CommonModule, RouterModule.forChild(mesFinancementsRoutes)
    ]
})
export class MesFinancementsModule {
}
