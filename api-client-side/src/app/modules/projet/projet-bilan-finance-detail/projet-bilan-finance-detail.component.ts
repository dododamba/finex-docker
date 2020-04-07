import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';
import {ProjetService} from '../projet.service';
import { FinancementService } from '../../financement/financement.service';

@Component({
    selector: 'app-projet-bilan-finance-detail',
    templateUrl: './projet-bilan-finance-detail.component.html',
    styleUrls: ['./projet-bilan-finance-detail.component.scss']
})
export class ProjetBilanFinanceDetailComponent implements OnInit {


    slug: string;
    routeParams: Params;
    financement: IFinancement;

    constructor(private service: FinancementService,
                private router: Router, private route: ActivatedRoute ) {
        this.getSlug();
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
        console.log(this.slug);

    }

    getSlug() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;


        });
    }

    getMontant(montantTotal: number, montantEncaisse: number) {
        const resultat = montantTotal - montantEncaisse;
        return resultat > 0 ? resultat : 'Montant à percevoire deja depassé';
    }


    select(slug: string) {
        this.service.find(slug).subscribe(
            (res: any) => {
                this.financement = res._embeded.financement;
                console.log(this.financement);
            }
        );
    }

}
