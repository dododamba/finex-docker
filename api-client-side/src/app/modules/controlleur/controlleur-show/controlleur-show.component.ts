import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-controlleur-show',
    templateUrl: './controlleur-show.component.html',
    styleUrls: ['./controlleur-show.component.scss']
})
export class ControlleurShowComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
