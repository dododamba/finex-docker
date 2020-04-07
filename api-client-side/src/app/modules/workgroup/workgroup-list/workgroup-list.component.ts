import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IEmploye} from '../../employe/employe';
import {GroupeTravailService} from '../../groupe-travail/groupe-travail.service';
import {IGroupeTravail} from '../../groupe-travail/groupe-travail';

@Component({
    selector: 'app-workgroup-list',
    templateUrl: './workgroup-list.component.html',
    styleUrls: ['./workgroup-list.component.css']
})
export class WorkgroupListComponent implements OnInit {

    employe: IEmploye;
    groups: IGroupeTravail[];

    constructor(private router: Router, private groupService: GroupeTravailService) {
    }

    ngOnInit() {
        this.getEmployeInfo();
    }

    getEmployeInfo() {
        const employe = JSON.parse(localStorage.getItem('employe'));
        this.employe = employe;
        this.getMyGroups(this.employe);
    }

    getMyGroups(employe: IEmploye) {
        this.groupService.getMyGroup(employe.slug).subscribe(
            (res: any) => {
                this.groups = res._embeded.groupes;
                console.log(this.groups)
            }
        );

    }

    getWorkGroup(slug: string) {
        this.router.navigate(['workgroups/' + slug]);
    }
}
