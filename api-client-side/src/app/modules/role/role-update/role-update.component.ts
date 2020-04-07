import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-role-update',
    templateUrl: './role-update.component.html',
    styleUrls: ['./role-update.component.scss']
})
export class RoleUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
