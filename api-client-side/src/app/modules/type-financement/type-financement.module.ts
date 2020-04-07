import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeFinancementComponent} from './type-financement.component';
import {TypeFinancementCreateComponent} from './type-financement-create/type-financement-create.component';
import {TypeFinancementDetailComponent} from './type-financement-detail/type-financement-detail.component';
import {TypeFinancementListComponent} from './type-financement-list/type-financement-list.component';
import {TypeFinancementUpdateComponent} from './type-financement-update/type-financement-update.component';
import {RouterModule} from '@angular/router';
import {tyFinancementRoutes} from './type-financement.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [TypeFinancementComponent, TypeFinancementCreateComponent, TypeFinancementDetailComponent, TypeFinancementListComponent, TypeFinancementUpdateComponent],
    imports: [
        CommonModule, FormsModule,
        ReactiveFormsModule, RouterModule.forChild(tyFinancementRoutes)
    ]
})
export class TypeFinancementModule {
}
