import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-direction-update',
    templateUrl: './direction-update.component.html',
    styleUrls: ['./direction-update.component.scss']
})
export class DirectionUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
