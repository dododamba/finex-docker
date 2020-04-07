import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes: Routes = [
    {path: '', component: DashboardComponent, canActivate: [AuthGuard]}
];
