import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IEmploye } from '../../employe/employe';
import { IRole } from '../../role/role';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { EmployeService } from '../../employe/employe.service';
import { RoleService } from '../../role/role.service';


@Component({
  selector: 'app-groupe-travail-membre-add',
  templateUrl: './groupe-travail-membre-add.component.html',
  styleUrls: ['./groupe-travail-membre-add.component.scss']
})
export class GroupeTravailMembreAddComponent implements OnInit {

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
