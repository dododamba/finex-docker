import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseShowComponent } from './entreprise-show/entreprise-show.component';
import { EntrepriseUpdateComponent } from './entreprise-update/entreprise-update.component';
import { EntrepriseCreateComponent } from './entreprise-create/entreprise-create.component';
import { AuthGuard } from 'src/app/core/auth-guard';
import { Routes } from '@angular/router';

export const entrepriseRoutes: Routes = [
    {
        path: '',
        component: EntrepriseComponent,
        children: [
            {path: 'list', component: EntrepriseListComponent},
            {path: 'create', component: EntrepriseCreateComponent},
            {path: 'swow/:slug', component: EntrepriseShowComponent},
            {path: 'update/:slug', component: EntrepriseUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];