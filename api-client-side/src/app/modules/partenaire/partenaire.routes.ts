import {PartenaireListComponent} from './partenaire-list/partenaire-list.component';
import {PartenaireDetailComponent} from './partenaire-detail/partenaire-detail.component';
import {PartenaireCreateComponent} from './partenaire-create/partenaire-create.component';
import {PartenaireComponent} from './partenaire.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';

export const partenaireRoutes: Routes = [
    {
        path: '',
        component: PartenaireComponent,
        children: [
            {path: 'list', component: PartenaireListComponent},
            {path: ':id', component: PartenaireCreateComponent},
            {path: 'detail/:slug', component: PartenaireDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
