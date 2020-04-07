import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoriqueComponent} from './historique.component';
import {HistoriqueListComponent} from './historique-list/historique-list.component';
import {HistoriqueDetailComponent} from './historique-detail/historique-detail.component';
import {RouterModule} from '@angular/router';
import {historiqueRoutes} from './historique.routes';

@NgModule({
    declarations: [HistoriqueComponent, HistoriqueListComponent, HistoriqueDetailComponent],
    imports: [
        CommonModule, RouterModule.forChild(historiqueRoutes)
    ]
})
export class HistoriqueModule {
}
