import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoleListComponent} from './role-list/role-list.component';
import {RoleCreateComponent} from './role-create/role-create.component';
import {RoleDetailComponent} from './role-detail/role-detail.component';
import {RoleComponent} from './role.component';
import {roleRoutes} from './role.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoleUpdateComponent} from './role-update/role-update.component';


@NgModule({
    declarations: [RoleListComponent, RoleCreateComponent, RoleDetailComponent, RoleComponent, RoleUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(roleRoutes)
    ]
})
export class RoleModule {
}
