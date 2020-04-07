import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypeMarcheComponent} from './type-marche.component';
import {TypeMarcheListComponent} from './type-marche-list/type-marche-list.component';
import {TypeMarcheUpdateComponent} from './type-marche-update/type-marche-update.component';
import {TypeMarcheCreateComponent} from './type-marche-create/type-marche-create.component';
import {TypeMarcheShowComponent} from './type-marche-show/type-marche-show.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {typeMarchRoutes} from './type-marche.routes';


@NgModule({
    declarations: [TypeMarcheComponent, TypeMarcheListComponent, TypeMarcheUpdateComponent, TypeMarcheCreateComponent, TypeMarcheShowComponent],
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule, RouterModule.forChild(typeMarchRoutes)
    ]
})
export class TypeMarcheModule {
}
