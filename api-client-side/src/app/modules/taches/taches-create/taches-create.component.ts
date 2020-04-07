import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {TacheService} from '../tache.service';
import {ITache} from '../tache';
import {IEmploye} from '../../employe/employe';
import {EmployeService} from '../../employe/employe.service';
import {EtapeService} from '../../etapes/etapes.service';
import {IProjet} from '../../projet/projet';
import {IEtape} from '../../etapes/etapes';
import {ProjetService} from '../../projet/projet.service';
import {IGroupeTravail} from '../../groupe-travail/groupe-travail';
import {GroupeTravailService} from '../../groupe-travail/groupe-travail.service';

@Component({
    selector: 'app-taches-create',
    templateUrl: './taches-create.component.html',
    styleUrls: ['./taches-create.component.css']
})
export class TachesCreateComponent implements OnInit {

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


    constructor(private fb: FormBuilder,
                private employeService: EmployeService,
                private service: TacheService,
                private etapeService: EtapeService,
                private projetService: ProjetService,
                private groupeTravailService: GroupeTravailService,
                private router: Router
    ) {
    }

    ngOnInit() {
        this.getProjet();
        this.fetchEmploye();
        this.initForm();

        this.dropdownSettings = {
            singleSelection: false,
            text: 'Selectectioner',
            selectAllText: 'Tous Cocher',
            unSelectAllText: 'Tous décocher',
            enableSearchFilter: true,
            classes: 'form-control'
        };
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
            //etape: this.fGroup.value.etape,

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
            etapeSlug: this.fGroup.value.etape,
            dateDebut: this.fGroup.value.dateDebut,
            dateFin: this.fGroup.value.dateFin,
            //cout : ,
            //groupeTravail : ,
            etat: this.fGroup.value.etat,
        };

        console.log(data);
    }

}
