import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-secteur-update',
    templateUrl: './secteur-update.component.html',
    styleUrls: ['./secteur-update.component.scss']
})
export class SecteurUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
