import {MaitreOeuvragesComponent} from './maitre-oeuvrages.component';
import {MaitreOeuvragesListComponent} from './maitre-oeuvrages-list/maitre-oeuvrages-list.component';
import {MaitreOeuvragesCreateComponent} from './maitre-oeuvrages-create/maitre-oeuvrages-create.component';
import {MaitreOeuvragesDetailComponent} from './maitre-oeuvrages-detail/maitre-oeuvrages-detail.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {Routes} from '@angular/router';
import {MaitreOeuvragesUpdateComponent} from './maitre-oeuvrages-update/maitre-oeuvrages-update.component';

export const miatreOeuvrageRoutes: Routes = [
    {
        path: '',
        component: MaitreOeuvragesComponent,
        children: [
            {path: 'list', component: MaitreOeuvragesListComponent},
            {path: ':id', component: MaitreOeuvragesCreateComponent},
            {path: 'show/:slug', component: MaitreOeuvragesDetailComponent},
            {path: 'edit/:slug', component: MaitreOeuvragesUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },
];
