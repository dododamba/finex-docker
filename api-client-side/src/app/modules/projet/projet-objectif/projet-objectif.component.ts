import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ProjetService} from '../projet.service';
import {IProjet} from '../projet';
import {IFinancement} from '../../financement/financement';


@Component({
  selector: 'app-projet-objectif',
  templateUrl: './projet-objectif.component.html',
  styleUrls: ['./projet-objectif.component.scss']
})
export class ProjetObjectifComponent implements OnInit {

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


  addObj() {
      this.router.navigate(['projets/objectif/create/', this.slug]);

  }

  show(slug:string) {
      this.router.navigate(['projets/objectif/',this.slug,'/show/',slug]);

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
