import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-type-partenaire-detail',
    templateUrl: './type-partenaire-detail.component.html',
    styleUrls: ['./type-partenaire-detail.component.css']
})
export class TypePartenaireDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
