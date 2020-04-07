import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {SousSecteurShowComponent} from './sous-secteur-show/sous-secteur-show.component';
import {SousSecteurComponent} from './sous-secteur.component';
import {SousSecteurListComponent} from './sous-secteur-list/sous-secteur-list.component';
import {SousSecteurEditComponent} from './sous-secteur-edit/sous-secteur-edit.component';
import {SousSecteurUpdateComponent} from './sous-secteur-update/sous-secteur-update.component';

export const soussecteurRoutes: Routes = [
    {
        path: '',
        component: SousSecteurComponent,
        children: [
            {path: 'list', component: SousSecteurListComponent},
            {path: 'create', component: SousSecteurEditComponent},
            {path: 'swow/:slug', component: SousSecteurShowComponent},
            {path: 'update/:slug', component: SousSecteurUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];
