import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-type-partenaire-update',
    templateUrl: './type-partenaire-update.component.html',
    styleUrls: ['./type-partenaire-update.component.scss']
})
export class TypePartenaireUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
