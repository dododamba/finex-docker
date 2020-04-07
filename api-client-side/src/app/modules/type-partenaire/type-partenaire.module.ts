import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypePartenaireListComponent} from './type-partenaire-list/type-partenaire-list.component';
import {TypePartenaireDetailComponent} from './type-partenaire-detail/type-partenaire-detail.component';
import {TypePartenaireCreateComponent} from './type-partenaire-create/type-partenaire-create.component';
import {TypePartenaireComponent} from './type-partenaire.component';
import {typePartenaireRoutes} from './type-partenaire.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypePartenaireUpdateComponent} from './type-partenaire-update/type-partenaire-update.component';

@NgModule({
    declarations: [
        TypePartenaireListComponent,
        TypePartenaireDetailComponent,
        TypePartenaireCreateComponent,
        TypePartenaireComponent,
        TypePartenaireUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(typePartenaireRoutes)
    ]
})
export class TypePartenaireModule {
}
