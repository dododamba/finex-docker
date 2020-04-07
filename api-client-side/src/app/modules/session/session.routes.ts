import {Routes} from '@angular/router';

import {AuthGuard} from '../../core/auth-guard';
import {SessionComponent} from './session.component';
import {SessionListComponent} from './session-list/session-list.component';
import {SessionDetailComponent} from './session-detail/session-detail.component';

export const sessionRoutes: Routes = [
    {
        path: '',
        component: SessionComponent,
        children: [
            {path: 'list', component: SessionListComponent},
            {path: 'detail/:slug', component: SessionDetailComponent},
        ],
        canActivate: [AuthGuard]
    },
];
