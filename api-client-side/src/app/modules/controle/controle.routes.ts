import {Routes} from '@angular/router';
import {ControlleurComponent} from '../controlleur/controlleur.component';
import {ControlleurListComponent} from '../controlleur/controlleur-list/controlleur-list.component';
import {ControlleurCreateComponent} from '../controlleur/controlleur-create/controlleur-create.component';
import {ControlleurShowComponent} from '../controlleur/controlleur-show/controlleur-show.component';
import {ControlleurUpdateComponent} from '../controlleur/controlleur-update/controlleur-update.component';
import {AuthGuard} from '../../core/auth-guard';
import {ControleComponent} from './controle.component';
import {ControleListComponent} from './controle-list/controle-list.component';
import {ControleCreateComponent} from './controle-create/controle-create.component';
import {ControleShowComponent} from './controle-show/controle-show.component';
import {ControleUpdateComponent} from './controle-update/controle-update.component';


export const controleRoutes: Routes = [
    {
        path: '',
        component: ControleComponent,
        children: [
            {path: 'list', component: ControleListComponent},
            {path: 'create', component: ControleCreateComponent},
            {path: 'show/:slug', component: ControleShowComponent},
            {path: 'edit/:slug', component: ControleUpdateComponent}

        ],
        canActivate: [AuthGuard]
    },

];
