import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-decaissement-detail',
    templateUrl: './decaissement-detail.component.html',
    styleUrls: ['./decaissement-detail.component.css']
})
export class DecaissementDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
