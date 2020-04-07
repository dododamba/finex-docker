import {Routes} from '@angular/router';
import {AuthGuard} from '../../core/auth-guard';
import {TypeMarcheComponent} from './type-marche.component';
import {TypeMarcheListComponent} from './type-marche-list/type-marche-list.component';
import {TypeMarcheCreateComponent} from './type-marche-create/type-marche-create.component';
import {TypeMarcheShowComponent} from './type-marche-show/type-marche-show.component';


export const typeMarchRoutes: Routes = [
    {
        path: '',
        component: TypeMarcheComponent,
        children: [
            {path: 'list', component: TypeMarcheListComponent},
            {path: ':create', component: TypeMarcheCreateComponent},
            {path: ':slug', component: TypeMarcheShowComponent}
        ],
        canActivate: [AuthGuard]
    },
];
