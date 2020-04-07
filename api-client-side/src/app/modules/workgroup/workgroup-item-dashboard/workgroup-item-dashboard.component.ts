import {Component, OnInit} from '@angular/core';
import {CardStore} from '../card/card';
import {ListSchema} from '../list/list-schema';

@Component({
    selector: 'app-workgroup-item-dashboard',
    templateUrl: './workgroup-item-dashboard.component.html',
    styleUrls: ['./workgroup-item-dashboard.component.css']
})
export class WorkgroupItemDashboardComponent implements OnInit {
    cardStore: CardStore;
    lists: ListSchema[];

    constructor() {
    }

    setMockData(): void {
        this.cardStore = new CardStore();
        const lists: ListSchema[] = [
            {
                name: 'En cours',
                cards: []
            },
            {
                name: 'Effectué',
                cards: []
            },
            {
                name: 'A verifier',
                cards: []
            },

        ];
        this.lists = lists;
    }

    ngOnInit() {
        this.setMockData();
    }
}
