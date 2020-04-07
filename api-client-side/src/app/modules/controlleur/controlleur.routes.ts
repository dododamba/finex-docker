import {ControlleurComponent} from './controlleur.component';
import {Routes} from '@angular/router';
import {ControlleurListComponent} from './controlleur-list/controlleur-list.component';
import {ControlleurCreateComponent} from './controlleur-create/controlleur-create.component';
import {ControlleurShowComponent} from './controlleur-show/controlleur-show.component';
import {ControlleurUpdateComponent} from './controlleur-update/controlleur-update.component';
import {AuthGuard} from 'src/app/core/auth-guard';

export const controlleurRoutes: Routes = [
    {
        path: '',
        component: ControlleurComponent,
        children: [
            {path: 'list', component: ControlleurListComponent},
            {path: 'create', component: ControlleurCreateComponent},
            {path: 'show/:slug', component: ControlleurShowComponent},
            {path: 'edit/:slug', component: ControlleurUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];
