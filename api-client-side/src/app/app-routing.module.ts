import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WebLayoutComponent} from './@layout/web-layout/web-layout.component';
import {AppLayoutComponent} from './@layout/app-layout/app-layout.component';

const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {
        path: '',
        component: WebLayoutComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
            }
        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'calendrier',
                loadChildren: () => import('./modules/calendrier/calendrier.module').then(m => m.CalendrierModule)
            },
            {
                path: 'direction',
                loadChildren: () => import('./modules/direction/direction.module').then(m => m.DirectionModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'employe',
                loadChildren: () => import('./modules/employe/employe.module').then(m => m.EmployeModule)
            },
            {
                path: 'role',
                loadChildren: () => import('./modules/role/role.module').then(m => m.RoleModule)
            },
            {
                path: 'user',
                loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
            },
            {
                path: 'type-partenaire',
                loadChildren: () => import('./modules/type-partenaire/type-partenaire.module').then(m => m.TypePartenaireModule)
            },
            {
                path: 'partenaire',
                loadChildren: () => import('./modules/partenaire/partenaire.module').then(m => m.PartenaireModule)
            },
            {
                path: 'permissions',
                loadChildren: () => import('./modules/permission/permission.module').then(m => m.PermissionModule)
            },
            {
                path: 'decaissements',
                loadChildren: () => import('./modules/decaissement/decaissement.module').then(m => m.DecaissementModule)
            },
            {
                path: 'type-financements',
                loadChildren: () => import('./modules/type-financement/type-financement.module').then(m => m.TypeFinancementModule)
            },
            {
                path: 'financements',
                loadChildren: () => import('./modules/financement/financement.module').then(m => m.FinancementModule)
            },
            {
                path: 'mes-taches',
                loadChildren: () => import('./modules/mes-taches/mes-taches.module').then(m => m.MesTachesModule)
            },
            {
                path: 'mes-financements',
                loadChildren: () => import('./modules/mes-financements/mes-financements.module').then(m => m.MesFinancementsModule)
            },
            {
                path: 'mes-decaissements',
                loadChildren: () => import('./modules/mes-decaissements/mes-decaissements.module').then(m => m.MesDecaissementsModule)
            },
            {
                path: 'mon-profile',
                loadChildren: () => import('./modules/mon-profile/mon-profile.module').then(m => m.MonProfileModule)
            },
            {
                path: 'projets',
                loadChildren: () => import('./modules/projet/projet.module').then(m => m.ProjetModule)
            },
            {
                path: 'workgroups',
                loadChildren: () => import('./modules/workgroup/workgroup.module').then(m => m.WorkgroupModule)
            },
            {
                path: 'ma-galerie',
                loadChildren: () => import('./modules/ma-galerie/ma-galerie.module').then(m => m.MaGalerieModule)
            },
            {
                path: 'groupe-travail',
                loadChildren: () => import('./modules/groupe-travail/groupe-travail.module').then(m => m.GroupeTravailModule)
            },
            {
                path: 'taches',
                loadChildren: () => import('./modules/taches/taches.module').then(m => m.TachesModule)
            },
            {
                path: 'historique',
                loadChildren: () => import('./modules/historique/historique.module').then(m => m.HistoriqueModule)
            },
            {
                path: 'session',
                loadChildren: () => import('./modules/session/session.module').then(m => m.SessionModule)
            },

            {
                path: 'maitre-oeuvrages',
                loadChildren: () => import('./modules/maitre-oeuvrages/maitre-oeuvrages.module').then(m => m.MaitreOeuvragesModule)
            },
            {
                path: 'institutions',
                loadChildren: () => import('./modules/institution/institution.module').then(m => m.InstitutionModule)
            },
            {
                path: 'soumissionaires',
                loadChildren: () => import('./modules/soumissionaires/soumissionaires.module').then(m => m.SoumissionairesModule)
            },
            {
                path: 'controlleurs',
                loadChildren: () => import('./modules/controlleur/controlleur.module').then(m => m.ControlleurModule)
            },
            {
                path: 'secteur',
                loadChildren: () => import('./modules/secteur/secteur.module').then(m => m.SecteurModule)
            },
            {
                path: 'sous-secteur',
                loadChildren: () => import('./modules/sous-secteur/sous-secteur.module').then(m => m.SousSecteurModule)
            },
            {
                path: 'etapes',
                loadChildren: () => import('./modules/etapes/etapes.module').then(m => m.EtapesModule)
            },
            {
                path: 'regions',
                loadChildren: () => import('./modules/region/region.module').then(m => m.RegionModule)
            },
            {
                path: 'type-marches',
                loadChildren: () => import('./modules/type-marche/type-marche.module').then(m => m.TypeMarcheModule)
            },
            {
                path: 'chat',
                loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
            },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
