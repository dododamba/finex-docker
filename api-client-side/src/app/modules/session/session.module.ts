import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SessionComponent} from './session.component';
import {SessionListComponent} from './session-list/session-list.component';
import {SessionDetailComponent} from './session-detail/session-detail.component';
import {RouterModule} from '@angular/router';
import {sessionRoutes} from './session.routes';
import {SessionUpdateComponent} from './session-update/session-update.component';

@NgModule({
    declarations: [SessionComponent, SessionListComponent, SessionDetailComponent, SessionUpdateComponent],
    imports: [
        CommonModule, RouterModule.forChild(sessionRoutes)
    ]
})
export class SessionModule {
}
