import {Routes} from '@angular/router';
import {FinancementComponent} from './financement.component';
import {FinancementListComponent} from './financement-list/financement-list.component';
import {FinancementCreateComponent} from './financement-create/financement-create.component';
import {FinancementDetailComponent} from './financement-detail/financement-detail.component';
import {AuthGuard} from '../../core/auth-guard';
import {FinancementUpdateComponent} from './financement-update/financement-update.component';
import {FinancementEncaisserComponent} from './financement-encaisser/financement-encaisser.component';
import {MyFinancementComponent} from './my-financement/my-financement.component';

export const financementRoutes: Routes = [
    {
        path: '',
        component: FinancementComponent,
        children: [
            {path: 'list', component: FinancementListComponent},
            {path: 'create', component: FinancementCreateComponent},
            {path: 'show/:slug', component: FinancementDetailComponent},
            {path: 'edit/:slug', component: FinancementUpdateComponent},
            {path: 'mes-financement', component: MyFinancementComponent},

            {path: 'update/:slug', component: FinancementUpdateComponent},
            {path: 'encaisser/:slug/partenaire/:partenaire', component: FinancementEncaisserComponent},


        ],
        canActivate: [AuthGuard]
    },
];
