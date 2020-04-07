import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-session-update',
    templateUrl: './session-update.component.html',
    styleUrls: ['./session-update.component.scss']
})
export class SessionUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
