import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ITache } from '../../taches/tache';
import { IEmploye } from '../../employe/employe';
import { IProjet } from '../projet';
import { IGroupeTravail } from '../../groupe-travail/groupe-travail';
import { IEtape } from '../../etapes/etapes';
import { EmployeService } from '../../employe/employe.service';
import { TacheService } from '../../taches/tache.service';
import { EtapeService } from '../../etapes/etapes.service';
import { ProjetService } from '../projet.service';
import { GroupeTravailService } from '../../groupe-travail/groupe-travail.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-projet-tache-create',
  templateUrl: './projet-tache-create.component.html',
  styleUrls: ['./projet-tache-create.component.scss']
})
export class ProjetTacheCreateComponent implements OnInit {

  fGroup: FormGroup;
  typePartenaire: ITache;
  errors: string[];
  employes: IEmploye[];
  projets: IProjet[];
  groupes: IGroupeTravail[];
  selectedGroupeTravail: IGroupeTravail;
  selectedProjet: IProjet;
  etapes: IEtape[];
  urls = [];
  srcs = [];
  settings = {};
  selectedItems = [];
  dropdownSettings = {};
  datePickerConfig = {};
  routeParams: Params;
  slug : string;

   public options: string[] = ['One', 'Two', 'Three'];

  constructor(private fb: FormBuilder,
              private employeService: EmployeService,
              private service: TacheService,
              private etapeService: EtapeService,
              private projetService: ProjetService,
              private groupeTravailService: GroupeTravailService,
              private router: Router,
              private route: ActivatedRoute
                ) {
  }

  ngOnInit() {

      this.getSlug();
      this.fetchEmploye();
      this.initForm();

    
  }

  getSlug() {
    this.route.params.subscribe(params => {
        this.routeParams = params;
        this.slug = this.routeParams.slug;

    });
}



  onSelectFile(event) {
      if (event.target.files && event.target.files[0]) {
          // tslint:disable-next-line: prefer-const
          let filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
              const reader = new FileReader();

              reader.onload = (event: any) => {
                  this.urls.push(event.target.result);
              };

              reader.readAsDataURL(event.target.files[i]);
          }
      }
  }

  selectPoject(event: string) {
      const slug: string = event;


  }

  selectGroupeTravail(event: string) {
      const slug: string = event;
      this.groupeTravailService.select(slug).subscribe(
          (response: any) => {
              this.etapes = response._embeded.etapes;

          }
      );
  }

  onSelectPDF(event) {
      if (event.target.files && event.target.files[0]) {
          // tslint:disable-next-line: prefer-const
          let filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {

              this.srcs.push(event.target.files[i].name);
          }

          console.log(this.srcs);
      }
  }

  removePic(url: any) {
      const reader = new FileReader();
      console.log(url);
  }


  initForm() {
      this.fGroup = this.fb.group(
          {
              libelle: ['', Validators.required],
              priorite: ['', Validators.required],
              executant: ['', Validators.required],
              etape: ['', Validators.required],
              dateDebut: ['', Validators.required],
              dateFin: ['', Validators.required],
              images: [''],
              fichiers: [''],
              etat: [''],
              description: ['', Validators.compose([Validators.min(15), Validators.max(1000)])]
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

  getEtape() {
      this.etapeService.fetchNoPagination().subscribe(
          (response: any) => {
              this.etapes = response._embeded.etapes;

          }
      );
  }

  fetchEmploye() {
      this.employeService.noAccount().subscribe(
          (res: any) => {
              this.employes = res._embeded.employes;
          }
      );
  }

  create() {
      const data = {

          //images: this.fGroup.value.images,
          //fichiers: this.fGroup.value.fichiers,
          //etat: this.fGroup.value.etat,
          // description : this.fGroup.value.description,


          nom: this.fGroup.value.libelle,
          description: this.fGroup.value.description,
          priorite: this.fGroup.value.priorite,
          // planificateurSlug : ,
          exceuteurSlug: this.selectedItems,
          //projetSlug :  ,
          dateDebut: this.fGroup.value.dateDebut,
          dateFin: this.fGroup.value.dateFin,
          //cout : ,
          //groupeTravail : ,
          etat: this.fGroup.value.etat,
           etape: this.fGroup.value.slug,

      };

      console.log(data);
  }
}
