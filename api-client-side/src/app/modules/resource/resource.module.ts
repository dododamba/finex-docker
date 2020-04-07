import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResourceListComponent} from './resource-list/resource-list.component';
import {ResourceCreateComponent} from './resource-create/resource-create.component';
import {ResourceDetailComponent} from './resource-detail/resource-detail.component';
import {ResourceComponent} from './resource.component';
import {RouterModule} from '@angular/router';
import {resourceRoutes} from './resource.routes';


@NgModule({
    declarations: [ResourceListComponent, ResourceCreateComponent, ResourceDetailComponent, ResourceComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(resourceRoutes)
    ]
})
export class ResourceModule {
}
