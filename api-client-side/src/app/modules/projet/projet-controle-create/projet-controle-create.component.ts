import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IProjet} from '../projet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjetService} from '../projet.service';
import {EtapeService} from '../../etapes/etapes.service';
import {Etape} from '../../etapes/etapes';
import Swal from "sweetalert2";
import {ControleService} from '../../controle/controle.service';

@Component({
  selector: 'app-projet-controle-create',
  templateUrl: './projet-controle-create.component.html',
  styleUrls: ['./projet-controle-create.component.scss']
})
export class ProjetControleCreateComponent implements OnInit {


  slug: string;
  routeParams: Params;
  projet: IProjet;
  fGroup: FormGroup;
  datePickerConfig = {};

  constructor(private projetService: ProjetService,
              private router: Router, private route: ActivatedRoute, private service: ControleService,
              private fb: FormBuilder) {
    this.getSlug();
  }

  ngOnInit() {
    this.getSlug();
    this.select(this.slug);
    this.datePickerConfig = {
      locale: 'fr',
      format: 'DD/MM/YYYY',
      monthFormat: 'MMMM, YYYY',
      firstDayOfWeek: 'mo'
    };
    this.initForm();
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

  initForm() {
    this.fGroup = this.fb.group(
        {
          libelle: ['', Validators.required],
          description: [''],
          dateControle: ['', Validators.required],
          typeControle: ['', Validators.required],
          controlleur: ['', Validators.required],
        }
    );
  }


  submit() {
    const libelleForm = this.fGroup.value.libelle;
    const descriptionForm = this.fGroup.value.description;
    const typeControleForm = +this.fGroup.value.typeControle;
    const dateControleForm = this.fGroup.value.dateControle;
    const controlleurForm = this.fGroup.value.controlleur;
    const data = {
      libelle: libelleForm,
      description: descriptionForm,
      dateControle: dateControleForm,
      typeControle: typeControleForm,
      controlleur: controlleurForm,
      projet : this.slug
    };

    this.service.create(data).subscribe(
        (response: any) => {
          if (response.status) {
            Swal.fire('Succès', response.message, 'success').then(r => (
                console.log(r)
            ));

          }
        }
    );
  }

}
