import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-direction-detail',
    templateUrl: './direction-detail.component.html',
    styleUrls: ['./direction-detail.component.css']
})
export class DirectionDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
