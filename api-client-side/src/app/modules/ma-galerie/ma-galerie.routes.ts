import {Routes} from '@angular/router';
import {MaGalerieComponent} from './ma-galerie.component';
import {AuthGuard} from 'src/app/core/auth-guard';
import {MaGalerieLisComponent} from './ma-galerie-lis/ma-galerie-lis.component';

export const galerieRouts: Routes = [
    {
        path: '',
        component: MaGalerieComponent,
        children: [
            {path: 'list', component: MaGalerieLisComponent},
        ],
        canActivate: [AuthGuard]
    },

];
