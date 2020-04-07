import {Routes} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {MonProfileComponent} from './mon-profile.component';
import {MonProfileDetailComponent} from './mon-profile-detail/mon-profile-detail.component';
import {MonProfileUpdateComponent} from './mon-profile-update/mon-profile-update.component';

export const monprofileRoutes: Routes = [
    {
        path: '',
        component: MonProfileComponent,
        children: [
            {path: ':detail', component: MonProfileDetailComponent},
            {path: ':update', component: MonProfileUpdateComponent}
        ],
        canActivate: [AuthGuard]
    },
];
