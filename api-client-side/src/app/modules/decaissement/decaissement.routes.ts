import {Routes} from '@angular/router';
import {DecaissementComponent} from './decaissement.component';
import {DecaissementListComponent} from './decaissement-list/decaissement-list.component';
import {DecaissementCreateComponent} from './decaissement-create/decaissement-create.component';
import {DecaissementDetailComponent} from './decaissement-detail/decaissement-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';

export const decaissementRoutes: Routes = [
    {
        path: '',
        component: DecaissementComponent,
        children: [
            {path: 'list', component: DecaissementListComponent},
            {path: ':id', component: DecaissementCreateComponent},
            {path: ':slug', component: DecaissementDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
