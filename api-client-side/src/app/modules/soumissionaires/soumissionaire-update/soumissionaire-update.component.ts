import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-soumissionaire-update',
    templateUrl: './soumissionaire-update.component.html',
    styleUrls: ['./soumissionaire-update.component.scss']
})
export class SoumissionaireUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
