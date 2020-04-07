import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstitutionComponent} from './institution.component';
import {InstitutionCreateComponent} from './institution-create/institution-create.component';
import {InstitutionDetailComponent} from './institution-detail/institution-detail.component';
import {InstitutionListComponent} from './institution-list/institution-list.component';
import {InstitutionUpdateComponent} from './institution-update/institution-update.component';
import {RouterModule} from '@angular/router';
import {tyFinancementRoutes} from './institution.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [InstitutionComponent, InstitutionCreateComponent, InstitutionDetailComponent, InstitutionListComponent, InstitutionUpdateComponent],
    imports: [
        CommonModule, FormsModule,
        ReactiveFormsModule, RouterModule.forChild(tyFinancementRoutes)
    ]
})
export class InstitutionModule {
}
