import {Routes} from '@angular/router';
import {MesTachesListComponent} from './mes-taches-list/mes-taches-list.component';
import {MesTachesComponent} from './mes-taches.component';
import {MesTachesDetailComponent} from './mes-taches-detail/mes-taches-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';

export const mesTachesRoutes: Routes = [
    {
        path: '',
        component: MesTachesComponent,
        children: [
            {path: 'list', component: MesTachesListComponent},
            {path: ':slug', component: MesTachesDetailComponent}

        ],
        canActivate: [AuthGuard]
    },

];
