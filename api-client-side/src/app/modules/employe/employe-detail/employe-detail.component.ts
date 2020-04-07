import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-employe-detail',
    templateUrl: './employe-detail.component.html',
    styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
