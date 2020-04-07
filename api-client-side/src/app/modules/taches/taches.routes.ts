import {Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth-guard';
import {TachesComponent} from './taches.component';
import {TachesListComponent} from './taches-list/taches-list.component';
import {TachesCreateComponent} from './taches-create/taches-create.component';
import {TachesDetailComponent} from './taches-detail/taches-detail.component';

export const tachesRoutes: Routes = [
    {
        path: '',
        component: TachesComponent,
        children: [
            {path: 'list', component: TachesListComponent},
            {path: ':create', component: TachesCreateComponent},
            {path: ':slug', component: TachesDetailComponent}
        ],
        canActivate: [AuthGuard]
    },
];
