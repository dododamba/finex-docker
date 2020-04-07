import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MesTachesComponent} from './mes-taches.component';
import {MesTachesListComponent} from './mes-taches-list/mes-taches-list.component';
import {MesTachesDetailComponent} from './mes-taches-detail/mes-taches-detail.component';
import {RouterModule} from '@angular/router';
import {mesTachesRoutes} from './mes-taches.routes';

@NgModule({
    declarations: [MesTachesComponent, MesTachesListComponent, MesTachesDetailComponent],
    imports: [
        CommonModule, RouterModule.forChild(mesTachesRoutes)
    ]
})
export class MesTachesModule {
}
