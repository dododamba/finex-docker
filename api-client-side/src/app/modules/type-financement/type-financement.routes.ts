import {Routes} from '@angular/router';
import {TypeFinancementComponent} from './type-financement.component';
import {TypeFinancementListComponent} from './type-financement-list/type-financement-list.component';
import {TypeFinancementCreateComponent} from './type-financement-create/type-financement-create.component';
import {TypeFinancementDetailComponent} from './type-financement-detail/type-financement-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';

export const tyFinancementRoutes: Routes = [
    {
        path: '',
        component: TypeFinancementComponent,
        children: [
            {path: 'list', component: TypeFinancementListComponent},
            {path: ':create', component: TypeFinancementCreateComponent},
            {path: ':slug', component: TypeFinancementDetailComponent}
        ],
        canActivate: [AuthGuard]
    },
];
