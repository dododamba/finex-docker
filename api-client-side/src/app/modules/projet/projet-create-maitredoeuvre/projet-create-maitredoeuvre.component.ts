import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProjetService} from '../projet.service';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EntrepriseService } from '../../entreprise/entreprise.service';


@Component({
    selector: 'app-projet-create-maitredoeuvre',
    templateUrl: './projet-create-maitredoeuvre.component.html',
    styleUrls: ['./projet-create-maitredoeuvre.component.scss']
})
export class ProjetCreateMaitredoeuvreComponent implements OnInit {
    fGroup: FormGroup;

    slug: string;
    routeParams: Params;
    projet: IProjet;
    financements: IFinancement[];

    constructor(private fb: FormBuilder, private projetService: ProjetService,private entrepriseService: EntrepriseService,
                private router: Router, private route: ActivatedRoute) {
        this.getSlug();
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
        this.initForm();
    }

    getSlug() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;


        });
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
                adresseBanque: [''],
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
        const adresseBanque = this.fGroup.value.adresseBanque;

        const entreprise = {
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
            projetRequest: this.slug,
            adresseBanque: adresseBanque,

        };


        this.entrepriseService.addEntrepriseFromProjet(entreprise).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('projets/maitredoeuvre/' + this.slug);

                } else {

                }
            }
        );


    }


    select(slug: string) {
        this.projetService.find(slug).subscribe(
            (res: any) => {
                this.projet = res._embeded.projet;
                console.log(this.projet);
            }
        );
    }

}
