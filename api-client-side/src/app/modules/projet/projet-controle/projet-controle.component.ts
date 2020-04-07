import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';
import {ProjetService} from '../projet.service';
import {IControle} from '../../controle/controle';

@Component({
  selector: 'app-projet-controle',
  templateUrl: './projet-controle.component.html',
  styleUrls: ['./projet-controle.component.scss']
})
export class ProjetControleComponent implements OnInit {

  slug: string;
  routeParams: Params;
  projet: IProjet;
  financements: IFinancement[];
  controles: IControle[];

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

  show(slug: string) {
    this.router.navigate(['projets/entreprise/', this.slug, '/show/', slug]);

  }

  select(slug: string) {
    this.projetService.find(slug).subscribe(
        (res: any) => {
          this.projet = res._embeded.projet;
          this.controles = this.projet.controles;
          console.log(this.projet);
        }
    );
  }

    goToAControle() {
      this.router.navigate(['projets/controle/create/', this.slug]);
    }

  delete(slug: string) {
  }
}
