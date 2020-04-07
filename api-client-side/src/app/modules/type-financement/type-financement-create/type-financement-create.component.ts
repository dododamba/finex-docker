import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {ITypeFinancement} from '../type-financement';
import {TypeFinancementService} from '../type-financement.service';

@Component({
    selector: 'app-type-financement-create',
    templateUrl: './type-financement-create.component.html',
    styleUrls: ['./type-financement-create.component.css']
})
export class TypeFinancementCreateComponent implements OnInit {
    fGroup: FormGroup;
    typePartenaire: ITypeFinancement;
    errors: string[];

    constructor(private fb: FormBuilder, private service: TypeFinancementService, private router: Router) {
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
        const typeFinancement = {
            libelle: this.fGroup.value.libelle,
            description: this.fGroup.value.description
        };


        this.service.create(typeFinancement).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('type-financement/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }

}
