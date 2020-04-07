import {Routes} from '@angular/router';
import {MesDecaissementComponent} from './mes-decaissement.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {MesDecaissementsListComponent} from './mes-decaissements-list/mes-decaissements-list.component';
import {MesDecaissementsCreateComponent} from './mes-decaissements-create/mes-decaissements-create.component';
import {MesDecaissementsDetailComponent} from './mes-decaissements-detail/mes-decaissements-detail.component';

export const decaissementRoutes: Routes = [
    {
        path: '',
        component: MesDecaissementComponent,
        children: [
            {path: 'list', component: MesDecaissementsListComponent},
            {path: 'create', component: MesDecaissementsCreateComponent},
            {path: ':slug', component: MesDecaissementsDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
