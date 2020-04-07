import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-mes-financements-detail',
    templateUrl: './mes-financements-detail.component.html',
    styleUrls: ['./mes-financements-detail.component.scss']
})
export class MesFinancementsDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
