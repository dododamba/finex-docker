import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupeTravailListComponent} from './groupe-travail-list/groupe-travail-list.component';
import {GroupeTravailCreateComponent} from './groupe-travail-create/groupe-travail-create.component';
import {GroupeTravailUpdateComponent} from './groupe-travail-update/groupe-travail-update.component';
import {GroupeTravailDetailComponent} from './groupe-travail-detail/groupe-travail-detail.component';
import {groupeTravailRoutes} from './groupe-travail.routes';
import {RouterModule} from '@angular/router';
import {GroupeTravailComponent} from './groupe-travail.component';
import { GroupeTravailMembreComponent } from './groupe-travail-membre/groupe-travail-membre.component';
import { GroupeTravailMembreAddComponent } from './groupe-travail-membre-add/groupe-travail-membre-add.component';

@NgModule({
    // tslint:disable-next-line:max-line-length
    declarations: [GroupeTravailComponent, GroupeTravailListComponent, GroupeTravailCreateComponent, GroupeTravailUpdateComponent, GroupeTravailDetailComponent, GroupeTravailMembreComponent, GroupeTravailMembreAddComponent],
    imports: [
        CommonModule, RouterModule.forChild(groupeTravailRoutes)
    ]
})
export class GroupeTravailModule {
}
