import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MonProfileDetailComponent} from './mon-profile-detail/mon-profile-detail.component';
import {MonProfileUpdateComponent} from './mon-profile-update/mon-profile-update.component';
import {MonProfileComponent} from './mon-profile.component';
import {monprofileRoutes} from './mon-profil.routes';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [MonProfileDetailComponent, MonProfileUpdateComponent, MonProfileComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(monprofileRoutes)
    ]
})
export class MonProfileModule {
}
