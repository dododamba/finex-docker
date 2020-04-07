import {SoumissionairesComponent} from './soumissionaires.component';
import {SoumissionairesListComponent} from './soumissionaires-list/soumissionaires-list.component';
import {SoumissionairesCreateComponent} from './soumissionaires-create/soumissionaires-create.component';
import {SoumissionairesDetailComponent} from './soumissionaires-detail/soumissionaires-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {Routes} from '@angular/router';

export const soumissionaire: Routes = [
    {
        path: '',
        component: SoumissionairesComponent,
        children: [
            {path: 'list', component: SoumissionairesListComponent},
            {path: ':id', component: SoumissionairesCreateComponent},
            {path: 'detail/:slug', component: SoumissionairesDetailComponent}
        ],
        canActivate: [AuthGuard]
    },
];
