import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-etapes-update',
    templateUrl: './etapes-update.component.html',
    styleUrls: ['./etapes-update.component.css']
})
export class EtapesUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
