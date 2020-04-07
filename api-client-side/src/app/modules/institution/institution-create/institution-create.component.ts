import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {IInstitution} from '../institution';
import {InstitutionService} from '../institution.service';

@Component({
    selector: 'app-institution-create',
    templateUrl: './institution-create.component.html',
    styleUrls: ['./institution-create.component.css']
})
export class InstitutionCreateComponent implements OnInit {
    fGroup: FormGroup;
    typePartenaire: IInstitution;
    errors: string[];

    constructor(private fb: FormBuilder, private service: InstitutionService, private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                libelle: ['', Validators.required],
                description: ['', Validators.compose([Validators.min(15), Validators.max(1000)])]
            }
        );
    }


    create() {
        const Institution = {
            nom: this.fGroup.value.libelle,
            description: this.fGroup.value.description
        };


        this.service.create(Institution).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('institution/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }

}
