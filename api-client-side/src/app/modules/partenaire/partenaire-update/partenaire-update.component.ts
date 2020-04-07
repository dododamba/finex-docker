import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-partenaire-update',
    templateUrl: './partenaire-update.component.html',
    styleUrls: ['./partenaire-update.component.scss']
})
export class PartenaireUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
