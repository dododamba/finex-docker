import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-institution-detail',
    templateUrl: './institution-detail.component.html',
    styleUrls: ['./institution-detail.component.css']
})
export class InstitutionDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
