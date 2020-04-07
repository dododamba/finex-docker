import {Component, OnInit} from '@angular/core';
import { IPartenaire } from '../../partenaire/partenaire';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { IProjet } from '../projet';
import { ProjetService } from '../projet.service';

@Component({
    selector: 'app-mes-partenaires',
    templateUrl: './mes-partenaires.component.html',
    styleUrls: ['./mes-partenaires.component.scss']
})
export class MesPartenairesComponent implements OnInit {

    slug: string;
    routeParams: Params;
    projet: IProjet;
    partenaires: IPartenaire[];

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


    goToAddPartenaire() {
        this.router.navigate(['projets/mes-partenaires/create/', this.slug]);
    }


}
