import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-employe-update',
    templateUrl: './employe-update.component.html',
    styleUrls: ['./employe-update.component.scss']
})
export class EmployeUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
