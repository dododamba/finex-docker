import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    }


];

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule
    ]
})
export class LoginModule {
}
