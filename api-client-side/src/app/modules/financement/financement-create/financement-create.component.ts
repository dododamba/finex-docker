import {Component, OnInit} from '@angular/core';
import {TypeFinancementService} from '../../type-financement/type-financement.service';
import {ProjetService} from '../../projet/projet.service';
import {FinancementService} from '../financement.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProjet} from '../../projet/projet';
import {ITypeFinancement} from '../../type-financement/type-financement';
import {IPartenaire} from '../../partenaire/partenaire';
import {PartenaireService} from '../../partenaire/partenaire.service';
import {CreateFinancementRequest} from '../create-financement-request';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-financement-create',
    templateUrl: './financement-create.component.html',
    styleUrls: ['./financement-create.component.css']
})
export class FinancementCreateComponent implements OnInit {
    fGroup: FormGroup;
    projets: IProjet[];
    types: ITypeFinancement[];
    partenaires: IPartenaire[];

    constructor(
        private typeFinancementService: TypeFinancementService,
        private projetService: ProjetService,
        private service: FinancementService,
        private partenaireService: PartenaireService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.getProjet();
        this.getTypeFinance();
        this.getPartenaire();
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                libelle: ['', Validators.required],
                dateSignature: ['', Validators.required],
                montantTotal: [''],
                projetSlug: ['', Validators.required],
                typeSlug: ['', Validators.required],
                partenaireSulg: ['', Validators.required]

            }
        );
    }


    submit() {
        const libelle = this.fGroup.value.libelle;
        const dateSignature = this.fGroup.value.dateSignature;
        const montantTotal = this.fGroup.value.montantTotal;
        const projetSlug = this.fGroup.value.projetSlug;
        const typeSlug = this.fGroup.value.typeSlug;
        const partenaireSulg = this.fGroup.value.partenaireSulg;

        const request = new CreateFinancementRequest(libelle, dateSignature, montantTotal, projetSlug, typeSlug, partenaireSulg);
        this.service.create(request).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');

                }
            }
        );
    }

    getTypeFinance() {
        this.typeFinancementService.fetchNoPagination().subscribe(
            (response: any) => {
                this.types = response._embeded.entitys;
            }
        );
    }

    getProjet() {
        this.projetService.fetchNoPagination().subscribe(
            (response: any) => {
                this.projets = response._embeded.projets;
            }
        );
    }

    getPartenaire() {
        this.partenaireService.fetchAll().subscribe(
            (response: any) => {
                this.partenaires = response._embeded.partenaires;
            }
        );
    }

}
