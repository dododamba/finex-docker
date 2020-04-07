import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ISecteur} from '../secteur';
import {SecteurService} from '../secteur.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-secteur-create',
    templateUrl: './secteur-create.component.html',
    styleUrls: ['./secteur-create.component.scss']
})
export class SecteurCreateComponent implements OnInit {

    fGroup: FormGroup;
    controlleur: ISecteur;
    errors: string[];

    constructor(private fb: FormBuilder, private service: SecteurService, private router: Router) {
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
        const secteur = {
            nom: this.fGroup.value.libelle,
            description: this.fGroup.value.description
        };


        this.service.create(secteur).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('secteur/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }

}
