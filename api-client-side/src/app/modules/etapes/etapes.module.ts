import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EtapesComponent} from './etapes.component';
import {EtapesListComponent} from './etapes-list/etapes-list.component';
import {EtapesCreateComponent} from './etapes-create/etapes-create.component';
import {EtapesUpdateComponent} from './etapes-update/etapes-update.component';
import {EtapesDetailComponent} from './etapes-detail/etapes-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuard} from 'src/app/core/auth-guard';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
    declarations: [EtapesComponent, EtapesListComponent, EtapesCreateComponent, EtapesUpdateComponent, EtapesDetailComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, DpDatePickerModule,
        RouterModule.forChild([
            {
                path: '',
                component: EtapesComponent,
                children: [
                    {path: 'list', component: EtapesListComponent},
                    {path: 'create', component: EtapesCreateComponent},
                    {path: 'show/:slug', component: EtapesDetailComponent},
                    {path: 'edit/:slug', component: EtapesUpdateComponent}

                ],
                canActivate: [AuthGuard]
            }
        ])]
})
export class EtapesModule {
}
