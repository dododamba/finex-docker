import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-mes-decaissements-detail',
    templateUrl: './mes-decaissements-detail.component.html',
    styleUrls: ['./mes-decaissements-detail.component.scss']
})
export class MesDecaissementsDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
