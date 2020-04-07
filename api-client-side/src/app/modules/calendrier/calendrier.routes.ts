import {Routes} from '@angular/router';
import {CalendrierComponent} from './calendrier.component';
import {CalendrierMoisComponent} from './calendrier-mois/calendrier-mois.component';
import {CalendrierTacheDetailComponent} from './calendrier-tache-detail/calendrier-tache-detail.component';
import {AuthGuard} from '../../core/auth-guard';


export const calendrierRoutes: Routes = [
    {
        path: '',
        component: CalendrierComponent,
        children: [
            {path: 'calendrier/:slug', component: CalendrierComponent},
            {path: 'mois/:slug', component: CalendrierMoisComponent},
            {path: ':slug', component: CalendrierTacheDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
