import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancementComponent} from './financement.component';
import {FinancementListComponent} from './financement-list/financement-list.component';
import {FinancementCreateComponent} from './financement-create/financement-create.component';
import {FinancementDetailComponent} from './financement-detail/financement-detail.component';
import {FinancementUpdateComponent} from './financement-update/financement-update.component';
import {RouterModule} from '@angular/router';
import {financementRoutes} from './financement.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FinancementEncaisserComponent} from './financement-encaisser/financement-encaisser.component';
import {MyFinancementComponent} from './my-financement/my-financement.component';

@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [FinancementComponent, FinancementListComponent, FinancementCreateComponent, FinancementDetailComponent, FinancementUpdateComponent, FinancementEncaisserComponent, MyFinancementComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(financementRoutes)
    ]
})
export class FinancementModule {
}
