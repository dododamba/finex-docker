import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserComponent} from './user.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';


export const userRoutes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {path: 'list', component: UserListComponent},
            {path: 'create', component: UserCreateComponent},
            {path: ':slug', component: UserDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
