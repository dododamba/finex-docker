import { Routes } from '@angular/router';
import { ProjetComponent } from './projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { ProjetCreateComponent } from './projet-create/projet-create.component';
import { ProjetDetailComponent } from './projet-detail/projet-detail.component';
import { AuthGuard } from 'src/app/core/auth-guard';
import { ProjetBilanFinancierComponent } from './projet-bilan-financier/projet-bilan-financier.component';
import { ProjetBilanRealisationComponent } from './projet-bilan-realisation/projet-bilan-realisation.component';
import { ProjetStatistiqueComponent } from './projet-statistique/projet-statistique.component';
import { MyProjetComponent } from './my-projet/my-projet.component';
import { MyProjetCreateComponent } from './my-projet-create/my-projet-create.component';
import { ProjetEditComponent } from './projet-edit/projet-edit.component';
import { ProjetPartenaireComponent } from './projet-partenaire/projet-partenaire.component';
import { ProjetMaitreDoeuvreComponent } from './projet-maitre-doeuvre/projet-maitre-doeuvre.component';
import { ProjetEtapesComponent } from './projet-etapes/projet-etapes.component';
import { MesPartenairesComponent } from './mes-partenaires/mes-partenaires.component';
import { ProjetCreateMaitredoeuvreComponent } from './projet-create-maitredoeuvre/projet-create-maitredoeuvre.component';
import { ProjetBilanFinanceDetailComponent } from './projet-bilan-finance-detail/projet-bilan-finance-detail.component';
import { ProjetEtapeCreateComponent } from './projet-etape-create/projet-etape-create.component';
import { ProjetEtapeDetailComponent } from './projet-etape-detail/projet-etape-detail.component';
import { ProjetTacheCreateComponent } from './projet-tache-create/projet-tache-create.component';
import { ProjetTacheUpdateComponent } from './projet-tache-update/projet-tache-update.component';
import { ProjetPartenaireCreateComponent } from './projet-partenaire-create/projet-partenaire-create.component';
import { ProjetEntrepriseDetailComponent } from './projet-entreprise-detail/projet-entreprise-detail.component';
import {ProjetControleComponent} from './projet-controle/projet-controle.component';
import {ProjetControleCreateComponent} from './projet-controle-create/projet-controle-create.component';

export const projetRoutes: Routes = [
    { path: '',
    component: ProjetComponent,
    children : [
      {path : 'list', component: ProjetListComponent },
      {path: 'create' , component: ProjetCreateComponent},
      {path: 'finance/:slug', component: ProjetBilanFinancierComponent},
      {path: 'finance/detail/:slug', component: ProjetBilanFinanceDetailComponent},
      {path: 'realisation/:slug', component: ProjetBilanRealisationComponent},
      {path: 'statistique/:slug', component: ProjetStatistiqueComponent},
      {path: 'partenaire/:slug', component: ProjetPartenaireComponent},
      {path: 'enterprise/:slug', component: ProjetMaitreDoeuvreComponent},
      {path: 'etapes/:slug', component: ProjetEtapesComponent},
      {path: 'etapes/create/:slug', component: ProjetEtapeCreateComponent},
      {path: 'taches/create/:slug', component: ProjetTacheCreateComponent},
      {path: 'taches/update/:slug', component: ProjetTacheUpdateComponent},
      {path: 'etapes/detail/:slug', component: ProjetEtapeDetailComponent},
      {path: 'edit/:slug', component: ProjetEditComponent},
      {path: 'my-project', component: MyProjetComponent},
      {path: 'mes-partenaires/:slug', component: MesPartenairesComponent},
      {path: 'mes-partenaires/create/:slug', component: ProjetPartenaireCreateComponent},
      {path: 'maitredoeuvre/create/:slug', component: ProjetCreateMaitredoeuvreComponent},
      {path: 'maitredoeuvre/:slug', component: ProjetMaitreDoeuvreComponent},
      {path: 'entreprise/:slug/show/:detail', component: ProjetEntrepriseDetailComponent},
      //{path: 'caracterisque/:slug', component: },
      {path: 'controle/:slug', component: ProjetControleComponent},
      {path: 'controle/create/:slug', component: ProjetControleCreateComponent},
      {path: 'mes-soustraittants/:slug', component: MyProjetComponent},
      {path: 'my-project', component: MyProjetComponent},
      {path: 'my-project-create', component: MyProjetCreateComponent},
      {path: ':slug', component: ProjetDetailComponent}

    ],
    canActivate : [AuthGuard]},

  ];
