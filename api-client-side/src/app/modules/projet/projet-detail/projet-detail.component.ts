import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProjetService} from '../projet.service';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';

@Component({
    selector: 'app-projet-detail',
    templateUrl: './projet-detail.component.html',
    styleUrls: ['./projet-detail.component.css']
})
export class ProjetDetailComponent implements OnInit {
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

    select(slug: string) {
        this.projetService.find(slug).subscribe(
            (res: any) => {
                this.projet = res._embeded.projet;
            }
        );
    }

    showPartenaires() {

    }

    showMaitreDoeuvrages() {

    }

    gotToEdit(slug: string) {
        this.router.navigate(['projets/edit', slug]);
    }

    goToStat(slug: string) {
        this.router.navigate(['projets/statistique/', slug]);
    }

    goToRealisation(slug: string) {
        this.router.navigate(['projets/realisation/', slug]);
    }

    goTOFinance(slug: string) {
        this.router.navigate(['projets/finance/', slug]);

    }

    goTOPartenaire(slug: string) {
        this.router.navigate(['projets/mes-partenaires/', slug]);

    }

    goTOEnterprise(slug: string) {
        this.router.navigate(['projets/maitredoeuvre/', slug]);

    }

    goTOEtapes(slug: string) {
        this.router.navigate(['projets/etapes/', slug]);
    }


    goToControle(slug: string) {
        this.router.navigate(['projets/controle/', slug]);
    }

    goToCaracteristique(slug: string){
        this.router.navigate(['projets/caracterisque/', slug]);
    }
}
