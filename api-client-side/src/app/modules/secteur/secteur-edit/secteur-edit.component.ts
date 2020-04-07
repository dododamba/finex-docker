import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-secteur-edit',
    templateUrl: './secteur-edit.component.html',
    styleUrls: ['./secteur-edit.component.scss']
})
export class SecteurEditComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
