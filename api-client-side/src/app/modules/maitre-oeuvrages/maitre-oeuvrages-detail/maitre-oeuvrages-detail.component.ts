import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-maitre-oeuvrages-detail',
    templateUrl: './maitre-oeuvrages-detail.component.html',
    styleUrls: ['./maitre-oeuvrages-detail.component.css']
})
export class MaitreOeuvragesDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
