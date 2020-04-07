import {Routes} from '@angular/router';
import {PermissionComponent} from './permission.component';
import {PermissionListComponent} from './permission-list/permission-list.component';
import {PermissionCreateComponent} from './permission-create/permission-create.component';
import {PermissionDetailComponent} from './permission-detail/permission-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {PermissionUpdateComponent} from './permission-update/permission-update.component';


export const permissionRoutes: Routes = [
    {
        path: '',
        component: PermissionComponent,
        children: [
            {path: 'list', component: PermissionListComponent},
            {path: 'create', component: PermissionCreateComponent},
            {path: 'detail/:slug', component: PermissionDetailComponent},
            {path: 'update/:slug', component: PermissionUpdateComponent}
        ],
        canActivate: [AuthGuard]
    },

];
