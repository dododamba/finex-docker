import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-type-financement-detail',
    templateUrl: './type-financement-detail.component.html',
    styleUrls: ['./type-financement-detail.component.css']
})
export class TypeFinancementDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
