import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IControlleur} from '../controlleur';
import {ControlleurService} from '../controlleur.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-controlleur-create',
    templateUrl: './controlleur-create.component.html',
    styleUrls: ['./controlleur-create.component.scss']
})
export class ControlleurCreateComponent implements OnInit {

    fGroup: FormGroup;
    controlleur: IControlleur;
    errors: string[];

    constructor(private fb: FormBuilder, private service: ControlleurService, private router: Router) {
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
        const controlleur = {
            nom: this.fGroup.value.libelle,
            description: this.fGroup.value.description
        };


        this.service.create(controlleur).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('controlleurs/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }

}
