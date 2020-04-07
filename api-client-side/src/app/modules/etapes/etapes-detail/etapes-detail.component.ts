import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-etapes-detail',
    templateUrl: './etapes-detail.component.html',
    styleUrls: ['./etapes-detail.component.css']
})
export class EtapesDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
