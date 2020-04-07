import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-controlleur-update',
    templateUrl: './controlleur-update.component.html',
    styleUrls: ['./controlleur-update.component.scss']
})
export class ControlleurUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
