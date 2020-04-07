import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionComponent} from './permission.component';
import {PermissionListComponent} from './permission-list/permission-list.component';
import {PermissionDetailComponent} from './permission-detail/permission-detail.component';
import {PermissionCreateComponent} from './permission-create/permission-create.component';
import {PermissionUpdateComponent} from './permission-update/permission-update.component';
import {RouterModule} from '@angular/router';
import {permissionRoutes} from './permission.routes';

@NgModule({
    declarations: [PermissionComponent, PermissionListComponent, PermissionDetailComponent, PermissionCreateComponent, PermissionUpdateComponent],
    imports: [
        CommonModule, RouterModule.forChild(permissionRoutes)
    ]
})
export class PermissionModule {
}
