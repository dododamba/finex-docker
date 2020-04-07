import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectionListComponent} from './direction-list/direction-list.component';
import {DirectionDetailComponent} from './direction-detail/direction-detail.component';
import {DirectionCreateComponent} from './direction-create/direction-create.component';
import {DirectionComponent} from './direction.component';
import {RouterModule} from '@angular/router';
import {directionRoutes} from './direction.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DirectionUpdateComponent} from './direction-update/direction-update.component';


@NgModule({
    declarations: [DirectionListComponent, DirectionDetailComponent, DirectionCreateComponent, DirectionComponent, DirectionUpdateComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        RouterModule.forChild(directionRoutes)
    ]
})
export class DirectionModule {
}
