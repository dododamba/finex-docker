import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkgroupComponent} from './workgroup.component';
import {WorkgroupListComponent} from './workgroup-list/workgroup-list.component';
import {RouterModule} from '@angular/router';
import {workGroupRoutes} from './workgroup.routes';
import {WorkgroupItemDashboardComponent} from './workgroup-item-dashboard/workgroup-item-dashboard.component';
import {CardComponent} from './card/card.component';
import {ListComponent} from './list/list.component';

@NgModule({
    declarations: [WorkgroupComponent, WorkgroupListComponent, WorkgroupItemDashboardComponent, CardComponent, ListComponent],
    imports: [
        CommonModule, RouterModule.forChild(workGroupRoutes)
    ]
})
export class WorkgroupModule {
}
