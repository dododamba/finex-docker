import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeCreateComponent} from './employe-create/employe-create.component';
import {EmployeListComponent} from './employe-list/employe-list.component';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';
import {EmployeComponent} from './employe.component';
import {RouterModule} from '@angular/router';
import {employeRoutes} from './employe.routes';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeUpdateComponent} from './employe-update/employe-update.component';


@NgModule({
    declarations: [EmployeCreateComponent, EmployeListComponent, EmployeDetailComponent, EmployeComponent, EmployeUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(employeRoutes)
    ]
})
export class EmployeModule {
}
