import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SoumissionairesComponent} from './soumissionaires.component';
import {SoumissionairesListComponent} from './soumissionaires-list/soumissionaires-list.component';
import {SoumissionairesCreateComponent} from './soumissionaires-create/soumissionaires-create.component';
import {SoumissionairesDetailComponent} from './soumissionaires-detail/soumissionaires-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {soumissionaire} from './soumissionaire.routes';
import {SoumissionaireUpdateComponent} from './soumissionaire-update/soumissionaire-update.component';

@NgModule({
    declarations: [SoumissionairesComponent, SoumissionairesListComponent, SoumissionairesCreateComponent, SoumissionairesDetailComponent, SoumissionaireUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(soumissionaire)
    ]
})
export class SoumissionairesModule {
}
