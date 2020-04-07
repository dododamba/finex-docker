import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-sous-secteur-show',
    templateUrl: './sous-secteur-show.component.html',
    styleUrls: ['./sous-secteur-show.component.scss']
})
export class SousSecteurShowComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
