import {Routes} from '@angular/router';

import {AuthGuard} from 'src/app/core/auth-guard';
import {MesFinancementsComponent} from './mes-financements.component';
import {MesFinancementsDetailComponent} from './mes-financements-detail/mes-financements-detail.component';
import {MesFinancementsListComponent} from './mes-financements-list/mes-financements-list.component';

export const mesFinancementsRoutes: Routes = [
    {
        path: '',
        component: MesFinancementsComponent,
        children: [
            {path: 'list', component: MesFinancementsListComponent},
            {path: ':slug', component: MesFinancementsDetailComponent}

        ],
        canActivate: [AuthGuard]
    },

];
