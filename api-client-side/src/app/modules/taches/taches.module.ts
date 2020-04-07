import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown';

import {RouterModule} from '@angular/router';
import {tachesRoutes} from './taches.routes';
import {TachesComponent} from './taches.component';
import {TachesListComponent} from './taches-list/taches-list.component';
import {TachesUpdateComponent} from './taches-update/taches-update.component';
import {TachesDetailComponent} from './taches-detail/taches-detail.component';
import {TachesCreateComponent} from './taches-create/taches-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PdfViewerModule} from 'ng2-pdf-viewer'; // <- import PdfViewerModule

@NgModule({
    declarations: [TachesComponent, TachesListComponent, TachesUpdateComponent, TachesDetailComponent, TachesCreateComponent],
    imports: [
        CommonModule, FormsModule, PdfViewerModule, AngularMultiSelectModule,
        ReactiveFormsModule, RouterModule.forChild(tachesRoutes)
    ]
})
export class TachesModule {
}
