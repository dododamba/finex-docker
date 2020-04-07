import {Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth-guard';
import {HistoriqueComponent} from './historique.component';
import {HistoriqueListComponent} from './historique-list/historique-list.component';
import {HistoriqueDetailComponent} from './historique-detail/historique-detail.component';

export const historiqueRoutes: Routes = [
    {
        path: '',
        component: HistoriqueComponent,
        children: [
            {path: 'list', component: HistoriqueListComponent},
            {path: 'detail/:slug', component: HistoriqueDetailComponent},
        ],
        canActivate: [AuthGuard]
    },
];
