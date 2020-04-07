import {Component, OnInit} from '@angular/core';
import {IUser} from '../user';
import {UserService} from '../user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    users: IUser[];

    constructor(protected service: UserService) {
    }

    ngOnInit() {
        this.fetch();
    }

    fetch() {
        this.service.query().subscribe(
            (res: any) => {
                this.users = res._embeded.users;
            }
        );
    }
}
