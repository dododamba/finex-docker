import {Component, OnInit} from '@angular/core';
import { TypeMarche } from '../type-marche';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TypeMarcheService } from '../type-marche.service';

@Component({
    selector: 'app-type-marche-create',
    templateUrl: './type-marche-create.component.html',
    styleUrls: ['./type-marche-create.component.scss']
})
export class TypeMarcheCreateComponent implements OnInit {

    fGroup: FormGroup;

    constructor(
        private service: TypeMarcheService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                description: [''],
            }
        );
    }


    submit() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;




        const request = { 
            nom : nom,
            description: description
        };

        console.log(request)

        this.service.create(request).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');

                }
            }
        );
    }

}
