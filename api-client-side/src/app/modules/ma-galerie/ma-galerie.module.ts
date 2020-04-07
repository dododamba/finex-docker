import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaGalerieComponent} from './ma-galerie.component';
import {RouterModule} from '@angular/router';
import {galerieRouts} from './ma-galerie.routes';
import {MaGalerieLisComponent} from './ma-galerie-lis/ma-galerie-lis.component';

@NgModule({
    declarations: [MaGalerieComponent, MaGalerieLisComponent],
    imports: [
        CommonModule, RouterModule.forChild(galerieRouts)
    ]
})
export class MaGalerieModule {
}
