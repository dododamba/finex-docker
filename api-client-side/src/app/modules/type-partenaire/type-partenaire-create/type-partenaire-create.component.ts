import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TypePartenaireService} from '../type-partenaire.service';
import {ITypePartenaire} from '../type-partenaire';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-type-partenaire-create',
    templateUrl: './type-partenaire-create.component.html',
    styleUrls: ['./type-partenaire-create.component.css']
})
export class TypePartenaireCreateComponent implements OnInit {
    fGroup: FormGroup;
    typePartenaire: ITypePartenaire;
    errors: string[];

    constructor(private fb: FormBuilder, private service: TypePartenaireService, private router: Router) {
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
        const typePartenaire = {
            libelle: this.fGroup.value.libelle,
            description: this.fGroup.value.description
        };


        this.service.create(typePartenaire).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('type-partenaire/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }
}
