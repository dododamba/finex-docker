import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-financement-update',
    templateUrl: './financement-update.component.html',
    styleUrls: ['./financement-update.component.css']
})
export class FinancementUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
