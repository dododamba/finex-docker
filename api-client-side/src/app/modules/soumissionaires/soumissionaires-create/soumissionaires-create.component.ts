import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SoumissionaireService} from '../soumissionaire.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-soumissionaires-create',
    templateUrl: './soumissionaires-create.component.html',
    styleUrls: ['./soumissionaires-create.component.css']
})
export class SoumissionairesCreateComponent implements OnInit {

    fGroup: FormGroup;
    errors: any;

    constructor(private fb: FormBuilder, private service: SoumissionaireService, private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                responsable: ['', Validators.required],
                raisonSociale: ['', Validators.required],
                numeroIdFiscal: ['', Validators.required],
                nomBanque: ['', Validators.required],
                numeroCompte: ['', Validators.required],
                codeSwift: ['', Validators.required],
                adresse: [''],
                information: [''],
                description: ['', Validators.compose([Validators.min(15), Validators.max(1000)])]
            }
        );
    }

    create() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;
        const responsable = this.fGroup.value.responsable;
        const raisonSociale = this.fGroup.value.raisonSociale;
        const numeroIdFiscal = this.fGroup.value.numeroIdFiscal;
        const nomBanque = this.fGroup.value.nomBanque;
        const numeroCompte = this.fGroup.value.numeroCompte;
        const codeSwift = this.fGroup.value.codeSwift;
        const adresse = this.fGroup.value.adresse;
        const information = this.fGroup.value.information;

        const maitreDoeuvre = {
            nom: nom,
            description: description,
            responsable: responsable,
            raisonSociale: raisonSociale,
            numeroIdFiscal: numeroIdFiscal,
            nomBanque: nomBanque,
            numeroCompte: numeroCompte,
            codeSwift: codeSwift,
            adresse: adresse,
            information: information,
        };


        this.service.create(maitreDoeuvre).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('soumissionaires/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );


    }

}
