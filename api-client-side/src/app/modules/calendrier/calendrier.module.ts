import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendrierComponent} from './calendrier.component';
import {CalendrierTacheDetailComponent} from './calendrier-tache-detail/calendrier-tache-detail.component';
import {CalendrierMoisComponent} from './calendrier-mois/calendrier-mois.component';
import {RouterModule} from '@angular/router';
import {calendrierRoutes} from './calendrier.routes';

@NgModule({
    declarations: [CalendrierComponent, CalendrierTacheDetailComponent, CalendrierMoisComponent],
    imports: [
        CommonModule, RouterModule.forChild(calendrierRoutes)
    ]
})
export class CalendrierModule {
}
