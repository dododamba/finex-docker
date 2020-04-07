import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaitreOeuvragesComponent} from './maitre-oeuvrages.component';
import {MaitreOeuvragesListComponent} from './maitre-oeuvrages-list/maitre-oeuvrages-list.component';
import {MaitreOeuvragesDetailComponent} from './maitre-oeuvrages-detail/maitre-oeuvrages-detail.component';
import {MaitreOeuvragesCreateComponent} from './maitre-oeuvrages-create/maitre-oeuvrages-create.component';
import {RouterModule} from '@angular/router';
import {miatreOeuvrageRoutes} from './maitre-oeuvrage.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaitreOeuvragesUpdateComponent} from './maitre-oeuvrages-update/maitre-oeuvrages-update.component';

@NgModule({
    declarations: [MaitreOeuvragesComponent, MaitreOeuvragesListComponent, MaitreOeuvragesDetailComponent, MaitreOeuvragesCreateComponent, MaitreOeuvragesUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(miatreOeuvrageRoutes)
    ]
})
export class MaitreOeuvragesModule {
}
