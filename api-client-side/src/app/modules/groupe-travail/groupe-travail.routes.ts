import {AuthGuard} from '../../core/auth-guard';
import {GroupeTravailListComponent} from './groupe-travail-list/groupe-travail-list.component';
import {GroupeTravailCreateComponent} from './groupe-travail-create/groupe-travail-create.component';
import {GroupeTravailDetailComponent} from './groupe-travail-detail/groupe-travail-detail.component';
import {GroupeTravailComponent} from './groupe-travail.component';
import {Routes} from '@angular/router';
import {GroupeTravailUpdateComponent} from './groupe-travail-update/groupe-travail-update.component';
import { GroupeTravailMembreComponent } from './groupe-travail-membre/groupe-travail-membre.component';
import { GroupeTravailMembreAddComponent } from './groupe-travail-membre-add/groupe-travail-membre-add.component';

export const groupeTravailRoutes: Routes = [
    {
        path: '',
        component: GroupeTravailComponent,
        children: [
            {path: 'list', component: GroupeTravailListComponent},
            {path: ':id', component: GroupeTravailCreateComponent},
            {path: 'show/:slug', component: GroupeTravailDetailComponent},
            {path: 'member/:slug', component: GroupeTravailMembreComponent},
            {path: 'member-create/:slug', component: GroupeTravailMembreAddComponent},
            {path: 'edit/:slug', component: GroupeTravailUpdateComponent}
        ],
        canActivate: [AuthGuard]
    },
];
