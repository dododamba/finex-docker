import {ResourceListComponent} from './resource-list/resource-list.component';
import {ResourceCreateComponent} from './resource-create/resource-create.component';
import {ResourceDetailComponent} from './resource-detail/resource-detail.component';
import {ResourceComponent} from './resource.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';


export const resourceRoutes: Routes = [
    {
        path: '',
        component: ResourceComponent,
        children: [
            {path: 'list', component: ResourceListComponent},
            {path: ':slug', component: ResourceDetailComponent},
            {path: ':id', component: ResourceCreateComponent}
        ],
        canActivate: [AuthGuard]
    },

];
