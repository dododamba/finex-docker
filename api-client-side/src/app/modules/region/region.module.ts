import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegionComponent} from './region.component';
import {RegionListComponent} from './region-list/region-list.component';
import {RegionCreateComponent} from './region-create/region-create.component';
import {RegionShowComponent} from './region-show/region-show.component';
import {RegionUpdateComponent} from './region-update/region-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {regionRoutes} from './region.routes';


@NgModule({
    declarations: [RegionComponent, RegionListComponent, RegionCreateComponent, RegionShowComponent, RegionUpdateComponent],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(regionRoutes)
    ]
})
export class RegionModule {
}
