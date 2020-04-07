import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-partenaire-detail',
    templateUrl: './partenaire-detail.component.html',
    styleUrls: ['./partenaire-detail.component.css']
})
export class PartenaireDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
