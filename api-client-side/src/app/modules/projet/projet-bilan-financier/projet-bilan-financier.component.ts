import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';
import {ProjetService} from '../projet.service';

@Component({
    selector: 'app-projet-bilan-financier',
    templateUrl: './projet-bilan-financier.component.html',
    styleUrls: ['./projet-bilan-financier.component.css']
})
export class ProjetBilanFinancierComponent implements OnInit {

    slug: string;
    routeParams: Params;
    projet: IProjet;
    financements: IFinancement[];

    constructor(private projetService: ProjetService,
                private router: Router, private route: ActivatedRoute) {
        this.getSlug();
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
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
        this.projetService.find(slug).subscribe(
            (res: any) => {
                this.projet = res._embeded.projet;
                console.log(this.projet);
            }
        );
    }


    show(slug: string) {
        this.router.navigate(['projets/finance/detail/', slug]);
    }
}
