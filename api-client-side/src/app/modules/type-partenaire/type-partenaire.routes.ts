import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {TypePartenaireComponent} from './type-partenaire.component';
import {TypePartenaireListComponent} from './type-partenaire-list/type-partenaire-list.component';
import {TypePartenaireDetailComponent} from './type-partenaire-detail/type-partenaire-detail.component';
import {TypePartenaireCreateComponent} from './type-partenaire-create/type-partenaire-create.component';


export const typePartenaireRoutes: Routes = [
    {
        path: '',
        component: TypePartenaireComponent,
        children: [
            {path: 'list', component: TypePartenaireListComponent},
            {path: ':id', component: TypePartenaireCreateComponent},
            {path: ':slug', component: TypePartenaireDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
