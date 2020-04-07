import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-mes-taches-detail',
    templateUrl: './mes-taches-detail.component.html',
    styleUrls: ['./mes-taches-detail.component.css']
})
export class MesTachesDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
