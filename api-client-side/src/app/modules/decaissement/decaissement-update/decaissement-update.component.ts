import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-decaissement-update',
    templateUrl: './decaissement-update.component.html',
    styleUrls: ['./decaissement-update.component.css']
})
export class DecaissementUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
