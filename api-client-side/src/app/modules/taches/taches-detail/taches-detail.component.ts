import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-taches-detail',
    templateUrl: './taches-detail.component.html',
    styleUrls: ['./taches-detail.component.css']
})
export class TachesDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
