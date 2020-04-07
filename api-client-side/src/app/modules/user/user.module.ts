import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserCreateComponent} from './user-create/user-create.component';
import {UserComponent} from './user.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserUpdateComponent} from './user-update/user-update.component';


@NgModule({
    declarations: [UserDetailComponent, UserListComponent, UserCreateComponent, UserComponent, UserUpdateComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ]
})
export class UserModule {
}
