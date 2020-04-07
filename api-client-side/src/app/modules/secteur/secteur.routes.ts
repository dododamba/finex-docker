import {SecteurComponent} from './secteur.component';
import {SecteurListComponent} from './secteur-list/secteur-list.component';
import {SecteurCreateComponent} from './secteur-create/secteur-create.component';
import {SecteurUpdateComponent} from './secteur-update/secteur-update.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {SecteurShowComponent} from './secteur-show/secteur-show.component';

export const secteurRoutes: Routes = [
    {
        path: '',
        component: SecteurComponent,
        children: [
            {path: 'list', component: SecteurListComponent},
            {path: 'create', component: SecteurCreateComponent},
            {path: 'swow/:slug', component: SecteurShowComponent},
            {path: 'update/:slug', component: SecteurUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];
