import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-maitre-oeuvrages-update',
    templateUrl: './maitre-oeuvrages-update.component.html',
    styleUrls: ['./maitre-oeuvrages-update.component.scss']
})
export class MaitreOeuvragesUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
