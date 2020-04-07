import {Component, OnInit} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import Swal from 'sweetalert2';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IPartenaire} from '../../partenaire/partenaire';
import {IEmploye} from '../../employe/employe';
import {PartenaireService} from '../../partenaire/partenaire.service';
import {EmployeService} from '../../employe/employe.service';
import SlimSelect from 'slim-select';
import {ProjetCreateRequest} from '../projet-create-request';
import {ProjetService} from '../projet.service';
import {MaitreOeuvrageService} from '../../maitre-oeuvrages/maitre-oeuvrages.service';
import {SoumissionaireService} from '../../soumissionaires/soumissionaire.service';
import {ISoumissionaire} from '../../soumissionaires/soumissionaire';
import {IMaitreOeuvrage} from '../../maitre-oeuvrages/maitre-oeuvrage';
import {ModalService} from '../add-info-modal/modal.service';

declare var jQuery: any;


@Component({
    selector: 'app-projet-create',
    templateUrl: './projet-create.component.html',
    styleUrls: ['./projet-create.component.css']
})
export class ProjetCreateComponent implements OnInit {

    public myDatePickerOptions: IMyDpOptions = {
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        inline: false, dateFormat: 'dd.mm.yyyy',
    };

    fGroup: FormGroup;
    public partenaires: IPartenaire[];
    public employes: IEmploye[];
    public soumissionaires: ISoumissionaire[];
    public maitreOeuvrages: IMaitreOeuvrage[];
    public partenaireArray: any[];
    public employe: IEmploye;
    public choisir: boolean;
    public creer: boolean;
    public natures: string[] = [
        'date', 'numerique', 'décimale', 'chaine de charactère'
    ];


    public caracteristiqueTechniques: any = [];

    public model: any = {date: {year: 2018, month: 10, day: 9}};

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private partenaireService: PartenaireService,
        private employeService: EmployeService,
        private service: ProjetService,
        private maitreOeuvrageService: MaitreOeuvrageService,
        private soumissionaireService: SoumissionaireService,
        private modalService: ModalService
    ) {
        this.initForm();
        // tslint:disable-next-line: triple-equals
        this.choisir == false;
        this.creer == false;


    }

    get form() {
        return this.fGroup.controls;
    }

    get p() {
        return this.fGroup.controls.partenaires as FormArray;
    }

    ngOnInit() {
        // tslint:disable-next-line: no-unused-expression
        new SlimSelect({
            select: '#slim-select'
        });

        this.fetchPartenaire();
        this.fetchEmploye();
        this.fetchMaitreOeuvrage();
        this.fetchSoumissionaire();


    }

    isDate(first: string) {
        return first === 'date' ? true : false;
    }

    choisirMaitreOeuvrage() {
        this.choisir = true;
        this.creer = false;
    }

    creerMaitreOeuvrage() {
        this.choisir = false;
        this.creer = true;
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                numeroProjet: ['', Validators.required],
                dateDebut: ['', Validators.required],
                dateButoire: ['', Validators.required],
                budgetPrevisionel: ['', Validators.required],
                employeResponsable: ['', Validators.required],
                description: ['', Validators.required],
                partenaires: ['', Validators.required],
                valeur: [''],
                nature: [''],
                libelle: [''],
                maitreoevrage: [''],
                soumissionaire: [''],
                addToMaitreOeuvrade: ['']

            }
        );
    }

    addPartenaire(item: any) {
        this.fGroup.get('partenaires');
    }

    addMaitreOeuvrage(item: any) {
        this.fGroup.get('maitreoevrage');
    }

    addSoumissionaire(item: any) {
        this.fGroup.get('soumissionaire');
    }

    addCaracTechnique(libelleD: string, valeurD: any, natureD: string) {
        const caracteristiqueTechniques = {
            libelle: libelleD,
            valeur: valeurD,
            nature: natureD
        };
        this.caracteristiqueTechniques.push(caracteristiqueTechniques);
        console.log(this.caracteristiqueTechniques);
    }


    getSelectedEmploye(item: string) {

        const slug: string = item.toString();


        this.employeService.find(slug).subscribe(
            (res: any) => {
                this.employe = res._embeded.employe;
                console.log(this.employe);
            }
        );
    }

    fetchPartenaire() {
        this.partenaireService.fetchAll().subscribe(
            (res: any) => {
                this.partenaires = res._embeded.partenaires;

            }
        );
    }

    fetchEmploye() {
        this.employeService.query().subscribe(
            (res: any) => {
                this.employes = res._embeded.employes;

            }
        );
    }

    fetchSoumissionaire() {
        this.soumissionaireService.noPagination().subscribe(
            (res: any) => {
                this.soumissionaires = res._embeded.entitys;

            }
        );
    }

    fetchMaitreOeuvrage() {
        this.maitreOeuvrageService.noPagination().subscribe(
            (res: any) => {
                this.maitreOeuvrages = res._embeded.entitys;

            }
        );
    }


    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }

    submit() {

        const nom = this.fGroup.value.nom;
        const numeroProjet = this.fGroup.value.numeroProjet;
        const description = this.fGroup.value.description;
        const dateDebut = this.fGroup.value.dateDebut;
        const dateFin = this.fGroup.value.dateButoire;
        const budget = this.fGroup.value.budgetPrevisionel;
        const responsable = this.fGroup.value.employeResponsable;
        const partenaires = this.fGroup.value.partenaires;
        const soumissionaire = this.fGroup.value.soumissionaire;
        const maitreDoeuvrage = this.fGroup.value.maitreoevrage;
        // tslint:disable-next-line: one-variable-per-declaration

        // tslint:disable-next-line: variable-name
        const _data = new ProjetCreateRequest(nom, numeroProjet, description, dateDebut, dateFin, budget,
            responsable, partenaires, soumissionaire, maitreDoeuvrage, this.caracteristiqueTechniques);
        console.log(_data);
        this.service.create(_data).subscribe(
            (response: any) => {

                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');
                }
            }
        );
    }
}
