import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-financement-detail',
    templateUrl: './financement-detail.component.html',
    styleUrls: ['./financement-detail.component.css']
})
export class FinancementDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
