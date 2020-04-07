import {EmployeCreateComponent} from './employe-create/employe-create.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';
import {EmployeComponent} from './employe.component';
import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';

export const employeRoutes: Routes = [
    {
        path: '',
        component: EmployeComponent,
        children: [
            {path: 'list', component: EmployeListComponent},
            {path: ':create', component: EmployeCreateComponent},
            {path: ':slug', component: EmployeDetailComponent}
        ],
        canActivate: [AuthGuard]
    },

];
