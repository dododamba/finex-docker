import {Routes} from '@angular/router';
import {WorkgroupComponent} from './workgroup.component';
import {WorkgroupListComponent} from './workgroup-list/workgroup-list.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {WorkgroupItemDashboardComponent} from './workgroup-item-dashboard/workgroup-item-dashboard.component';

export const workGroupRoutes: Routes = [
    {
        path: '',
        component: WorkgroupComponent,
        children: [
            {path: 'list', component: WorkgroupListComponent},
            {path: ':slug', component: WorkgroupItemDashboardComponent},
        ],
        canActivate: [AuthGuard]
    },

];
