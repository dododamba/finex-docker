import {RoleListComponent} from './role-list/role-list.component';
import {RoleCreateComponent} from './role-create/role-create.component';
import {RoleDetailComponent} from './role-detail/role-detail.component';
import {RoleComponent} from './role.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';


export const roleRoutes: Routes = [
    {
        path: '',
        component: RoleComponent,
        children: [
            {path: 'list', component: RoleListComponent},
            {path: 'create', component: RoleCreateComponent},
            {path: ':slug', component: RoleDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
