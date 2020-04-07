import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html',
    styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
