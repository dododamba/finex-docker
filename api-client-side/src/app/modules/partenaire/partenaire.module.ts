import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartenaireListComponent} from './partenaire-list/partenaire-list.component';
import {PartenaireDetailComponent} from './partenaire-detail/partenaire-detail.component';
import {PartenaireCreateComponent} from './partenaire-create/partenaire-create.component';
import {PartenaireComponent} from './partenaire.component';
import {RouterModule} from '@angular/router';
import {partenaireRoutes} from './partenaire.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PartenaireUpdateComponent} from './partenaire-update/partenaire-update.component';


@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [PartenaireListComponent, PartenaireDetailComponent, PartenaireCreateComponent, PartenaireComponent, PartenaireUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(partenaireRoutes)
    ]
})
export class PartenaireModule {
}
