import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FinancementService} from '../financement.service';
import {IFinancement} from '../financement';
import {IProjet} from '../../projet/projet';
import {IPartenaire} from '../../partenaire/partenaire';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-financement-encaisser',
    templateUrl: './financement-encaisser.component.html',
    styleUrls: ['./financement-encaisser.component.css']
})
export class FinancementEncaisserComponent implements OnInit {
    slug: string;
    partenaireSlug: string;
    routeParams: Params;
    financement: IFinancement;
    projet: IProjet;
    partenaires: IPartenaire[];
    montantRestatnt: any;
    fGroup: FormGroup;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder,
        private financementService: FinancementService
    ) {
        this.getRouteParams();

    }

    ngOnInit() {
        this.getCurrentFinancement();
        this.initForm();
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                referencePieceJustificative: [''],
                piece: [''],
                dateEncaissement: ['', Validators.required],
                montant: ['', Validators.required]
            }
        );
    }

    getMontant(montantTotal: number, montantEncaisse: number) {
        const resultat = montantTotal - montantEncaisse;
        return resultat > 0 ? resultat : 'Montant à percevoire deja depassé';
    }

    getCurrentFinancement() {
        this.financementService.find(this.slug).subscribe(
            (response: any) => {
                this.financement = response._embeded.financement;
                this.projet = response._embeded.financement.projet;
                this.partenaires = response._embeded.financement.partenaires[0];
            }
        );
    }

    getRouteParams() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;
            this.partenaireSlug = this.routeParams.partenaire;

        });
    }

    submit() {
        const encaissement = {
            montant: this.fGroup.value.montant,
            referencePieceJustificative: this.fGroup.value.referencePieceJustificative,
            piece: this.fGroup.value.piece,
            dateEncaissement: this.fGroup.value.dateEncaissement,
            financementSlug: this.slug,
            partenaireSlug: this.partenaireSlug,
        };

        this.financementService.encaisser(encaissement).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');
                }
            }
        );
    }

}
