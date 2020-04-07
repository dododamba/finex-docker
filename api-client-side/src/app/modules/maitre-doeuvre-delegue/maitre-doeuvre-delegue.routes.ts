import { MaitreDoeuvreDelegueComponent } from './maitre-doeuvre-delegue.component';
import { MaitreDoeuvreDelegueListComponent } from './maitre-doeuvre-delegue-list/maitre-doeuvre-delegue-list.component';
import { MaitreDoeuvreDelegueCreateComponent } from './maitre-doeuvre-delegue-create/maitre-doeuvre-delegue-create.component';
import { MaitreDoeuvreDelegueShowComponent } from './maitre-doeuvre-delegue-show/maitre-doeuvre-delegue-show.component';
import { MaitreDoeuvreDelegueUpdateComponent } from './maitre-doeuvre-delegue-update/maitre-doeuvre-delegue-update.component';
import { AuthGuard } from 'src/app/core/auth-guard';
import { Routes } from '@angular/router';

export const entrepriseRoutes: Routes = [
    {
        path: '',
        component: MaitreDoeuvreDelegueComponent,
        children: [
            {path: 'list', component: MaitreDoeuvreDelegueListComponent},
            {path: 'create', component: MaitreDoeuvreDelegueCreateComponent},
            {path: 'swow/:slug', component: MaitreDoeuvreDelegueShowComponent},
            {path: 'update/:slug', component: MaitreDoeuvreDelegueUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];