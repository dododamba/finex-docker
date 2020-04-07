import {Component, OnInit} from '@angular/core';
import {Params} from '@angular/router';

@Component({
    selector: 'app-groupe-travail-update',
    templateUrl: './groupe-travail-update.component.html',
    styleUrls: ['./groupe-travail-update.component.css']
})
export class GroupeTravailUpdateComponent implements OnInit {
    slug: string;
    routeParams: Params;

    constructor() {
    }

    ngOnInit() {
    }

}
