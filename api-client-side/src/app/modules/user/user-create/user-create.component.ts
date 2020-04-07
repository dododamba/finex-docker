import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../../employe/employe.service';
import {UserService} from '../user.service';
import {RoleService} from '../../role/role.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IEmploye} from '../../employe/employe';
import {IRole} from '../../role/role';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    employes: IEmploye[];
    roles: IRole[];
    fGroup: FormGroup;
    successMessage: string;

    // createRequest: UserCreateRequest;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private service: UserService,
        private employeService: EmployeService,
        private roleService: RoleService) {
        this.initForm();

    }

    ngOnInit() {
        this.fetchEmploye();
        this.fetchRole();
        this.initForm();
        this.successMessage = null;
    }

    fetchRole() {
        this.roleService.query().subscribe(
            (res: any) => {
                this.roles = res._embeded.roles;
            }
        );
    }

    fetchEmploye() {
        this.employeService.noAccount().subscribe(
            (res: any) => {
                this.employes = res._embeded.employes;
            }
        );
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                email: ['', Validators.required],
                role: ['', Validators.required],
                employe: ['', Validators.required]
            }
        );
    }

    create() {
        const requestBody = {
            email: this.fGroup.value.email,
            employeSlug: this.fGroup.value.employe,
            role: this.fGroup.value.role
        };
        this.service.create(requestBody).subscribe(
            (res: any) => {
                if (res.status) {
                    this.successMessage = res.message;
                }
            }
        );
    }


}
