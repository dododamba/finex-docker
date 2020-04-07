import {Routes} from '@angular/router';
import {DirectionComponent} from './direction.component';
import {DirectionDetailComponent} from './direction-detail/direction-detail.component';
import {DirectionCreateComponent} from './direction-create/direction-create.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {DirectionListComponent} from './direction-list/direction-list.component';
import {DirectionUpdateComponent} from './direction-update/direction-update.component';

export const directionRoutes: Routes = [
    {
        path: '',
        component: DirectionComponent,
        children: [
            {path: 'list', component: DirectionListComponent},
            {path: 'create', component: DirectionCreateComponent},
            {path: 'show/:slug', component: DirectionDetailComponent},
            {path: 'edit/:slug', component: DirectionUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];

