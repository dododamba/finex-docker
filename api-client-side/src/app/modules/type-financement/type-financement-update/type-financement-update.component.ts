import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-type-financement-update',
    templateUrl: './type-financement-update.component.html',
    styleUrls: ['./type-financement-update.component.css']
})
export class TypeFinancementUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
