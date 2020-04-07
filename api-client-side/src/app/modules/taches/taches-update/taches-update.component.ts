import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-taches-update',
    templateUrl: './taches-update.component.html',
    styleUrls: ['./taches-update.component.css']
})
export class TachesUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
