import { Component, OnInit } from '@angular/core';
import {Params, Router, ActivatedRoute} from '@angular/router';
import { IGroupeTravail } from '../groupe-travail';
import { GroupeTravailService } from '../groupe-travail.service';


@Component({
  selector: 'app-groupe-travail-membre',
  templateUrl: './groupe-travail-membre.component.html',
  styleUrls: ['./groupe-travail-membre.component.scss']
})
export class GroupeTravailMembreComponent implements OnInit {
  slug: string;
  routeParams: Params;
  group: IGroupeTravail;

  constructor(private service: GroupeTravailService,
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
      this.service.select(slug).subscribe(
          (res: any) => {
              this.group = res._embeded.groupeTravail;
          }
      );
  }

}
