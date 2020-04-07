import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-sous-secteur-update',
    templateUrl: './sous-secteur-update.component.html',
    styleUrls: ['./sous-secteur-update.component.scss']
})
export class SousSecteurUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
