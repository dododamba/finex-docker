import {Routes} from '@angular/router';
import {TypeMarcheComponent} from '../type-marche/type-marche.component';
import {TypeMarcheListComponent} from '../type-marche/type-marche-list/type-marche-list.component';
import {TypeMarcheCreateComponent} from '../type-marche/type-marche-create/type-marche-create.component';
import {TypeMarcheShowComponent} from '../type-marche/type-marche-show/type-marche-show.component';
import {AuthGuard} from '../../core/auth-guard';
import {RegionComponent} from './region.component';
import {RegionListComponent} from './region-list/region-list.component';
import {RegionCreateComponent} from './region-create/region-create.component';
import {RegionShowComponent} from './region-show/region-show.component';

export const regionRoutes: Routes = [
    {
        path: '',
        component: RegionComponent,
        children: [
            {path: 'list', component: RegionListComponent},
            {path: ':create', component: RegionCreateComponent},
            {path: ':slug', component: RegionShowComponent}
        ],
        canActivate: [AuthGuard]
    },
];
