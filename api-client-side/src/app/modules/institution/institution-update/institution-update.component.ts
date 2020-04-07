import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-institution-update',
    templateUrl: './institution-update.component.html',
    styleUrls: ['./institution-update.component.css']
})
export class InstitutionUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
