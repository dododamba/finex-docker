import {Routes} from '@angular/router';
import {InstitutionComponent} from './institution.component';
import {InstitutionListComponent} from './institution-list/institution-list.component';
import {InstitutionCreateComponent} from './institution-create/institution-create.component';
import {InstitutionDetailComponent} from './institution-detail/institution-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {InstitutionUpdateComponent} from './institution-update/institution-update.component';

export const tyFinancementRoutes: Routes = [
    {
        path: '',
        component: InstitutionComponent,
        children: [
            {path: 'list', component: InstitutionListComponent},
            {path: ':create', component: InstitutionCreateComponent},
            {path: 'show/:slug', component: InstitutionDetailComponent},
            {path: 'edit/:slug', component: InstitutionUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },
];
