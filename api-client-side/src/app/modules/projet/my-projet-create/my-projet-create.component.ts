import {Component, OnInit} from '@angular/core';
import {IMyDpOptions} from 'mydatepicker';
import Swal from 'sweetalert2';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IPartenaire} from '../../partenaire/partenaire';
import {IEmploye} from '../../employe/employe';
import {PartenaireService} from '../../partenaire/partenaire.service';
import {EmployeService} from '../../employe/employe.service';
import {environment} from 'src/environments/environment';
import SlimSelect from 'slim-select';
import {ProjetCreateRequest} from '../projet-create-request';
import {ProjetService} from '../projet.service';
import {MaitreOeuvrageService} from '../../maitre-oeuvrages/maitre-oeuvrages.service';
import {SoumissionaireService} from '../../soumissionaires/soumissionaire.service';
import {ISoumissionaire} from '../../soumissionaires/soumissionaire';
import {IMaitreOeuvrage} from '../../maitre-oeuvrages/maitre-oeuvrage';
import {ModalService} from '../add-info-modal/modal.service';
import {SecteurService} from '../../secteur/secteur.service';
import {ISecteur} from '../../secteur/secteur';
import {IControlleur} from '../../controlleur/controlleur';
import {ControlleurService} from '../../controlleur/controlleur.service';
import { IRegion } from '../../region/region';
import { ITypeMarche } from '../../type-marche/type-marche';
import { TypeMarcheService } from '../../type-marche/type-marche.service';
import { RegionService } from '../../region/region.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

declare var $: any;


@Component({
    selector: 'app-my-projet-create',
    templateUrl: './my-projet-create.component.html',
    styleUrls: ['./my-projet-create.component.scss']
})
export class MyProjetCreateComponent implements OnInit {
    public myDatePickerOptions: IMyDpOptions = {
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        inline: false, dateFormat: 'dd.mm.yyyy',
    };

    fGroup: FormGroup;
    public caracteristique: boolean;
    public firstStep: boolean;
    public secondStep: boolean;
    public thirdStep: boolean;
    public maitreDoeuvrage: string;
    public partenaires: IPartenaire[];
    public employes: IEmploye[];
    public soumissionaires: ISoumissionaire[];
    public maitreOeuvrages: IMaitreOeuvrage[];
    public partenaireArray: any[];
    public secteurs: ISecteur[];
    public controlleurs: IControlleur[];
    public regions: IRegion[];
    public typeMarches: ITypeMarche[];
    public employe: IEmploye;
    public choisir: boolean;
    public creer: boolean;
    public natures: string[] = [
        'date', 'numerique', 'décimale', 'chaine de charactère'
    ];
    env = environment;
    public caracteristiqueTechniques: any = [];
    public regionProjets: any = [];
    public model: any = {date: {year: 2018, month: 10, day: 9}};
    private maitreOeuvrage: string;

    keyword='nom';

    selectEvent(item) {
        // do something with selected item
      }
    
      onChangeSearch(search: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
      }
    
      onFocused(e) {
        // do something
      }


    constructor(
        private router: Router,
        private fb: FormBuilder,
        private partenaireService: PartenaireService,
        private employeService: EmployeService,
        private service: ProjetService,
        private maitreOeuvrageService: MaitreOeuvrageService,
        private soumissionaireService: SoumissionaireService,
        private secteurService: SecteurService,
        private controlleurService: ControlleurService,
        private typeMacheService: TypeMarcheService,
        private regionService: RegionService,
        private modalService: ModalService
    ) {
        this.initForm();
        // tslint:disable-next-line: triple-equals
        this.choisir == false;
        this.creer == false;
        this.caracteristique == true;


    }


    changeStep(step: number){
        if(step == 1){
            this.firstStep = true;
            this.secondStep = false;
            this.thirdStep= false;
        }else if(step == 2){

            this.firstStep = false;
            this.secondStep = true;
            this.thirdStep= false;
        }else if(step == 3){

            this.firstStep = false;
            this.secondStep = false;
            this.thirdStep= true;
        } else{

            this.firstStep = true;
            this.secondStep = false;
            this.thirdStep= false;
        }
    }

    get form() {
        return this.fGroup.controls;
    }

    get p() {
        return this.fGroup.controls.partenaires as FormArray;
    }

    ngOnInit() {
        // tslint:disable-next-line: no-unused-expression

        this.changeStep(1);
        this.fetchRegion();
        this.fetchTypeMarche();
        this.fetchPartenaire();
        this.fetchEmploye();
        this.fetchMaitreOeuvrage();
        this.fetchSoumissionaire();
        this.fetchSecteur();
        this.fetchControlleur();
        this.getCurrentEmployeDetail();

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
                partenaires: [''],
                valeur: [''],
                nature: [''],
                libelle: [''],
                region: [''],
                soumissionaire: [''],
                typeMarche: [''],
                addToMaitreOeuvrade: [''],
                secteur: ['', Validators.required],
                controlleur: ['', Validators.required],

                maitreDoeuvre: ['',Validators.required],
              maitreDeouvreDelegue : ['', Validators.required],
	          maitreDeouvre : ['', Validators.required],
	          regions : [''],
    
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

    addRegion(item: any) {
        this.fGroup.get('regions');
    }


    addCaracTechnique(libelleD: string, valeurD: any, natureD: string) {
        const caracteristiqueTechniques = {
            libelle: libelleD,
            valeur: valeurD,
            nature: natureD
        };
        this.caracteristique = true;
        this.caracteristiqueTechniques.push(caracteristiqueTechniques);
    }

  

    getSelectedEmploye(item: string) {
        const slug: string = item.toString();
        this.employeService.find(slug).subscribe(
            (res: any) => {
                this.employe = res._embeded.employe;
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

    fetchSecteur() {
        this.secteurService.fetchNoPagination()
            .subscribe(
                (res: any) => {
                    this.secteurs = res._embeded.entitys;
                }
            );
    }


    fetchRegion() {
        this.regionService.fetchNoPagination()
            .subscribe(
                (res: any) => {
                    this.regions = res._embeded.regions;
                }
            );
    }

    fetchTypeMarche() {
        this.typeMacheService.fetchNoPagination()
            .subscribe(
                (res: any) => {
                    this.typeMarches = res._embeded.typeMarches;
                }
            );
    }


    fetchControlleur() {
        this.controlleurService.fetchNoPagination()
            .subscribe(
                (res: any) => {
                    this.controlleurs = res._embeded.entitys;
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

    getCurrentEmployeDetail() {
        const user = localStorage.getItem(this.env.CONNECTED_USER);
        const jsonInfo = JSON.parse(user);
        const slug = jsonInfo.slug;

        this.employeService.findByUser(slug).subscribe(
            (res: any) => {
                
                

                this.employe = res._embeded.employe;
                this.maitreDoeuvrage = this.employe.direction.institution.slug;
                
            }
        );
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
        const secteur = this.fGroup.value.secteur;
        const controlleur = this.fGroup.value.controlleur;
        const typeMarche = this.fGroup.value.typeMarche;
        
        const maitreDeouvreDelegue = this.fGroup.value.maitreDeouvreDelegue;
        const maitreDeouvre = this.fGroup.value.maitreDoeuvre;
        const regions = this.fGroup.value.regions;

        // tslint:disable-next-line: variable-name
        const _data = {
            nom: nom, 
            numeroProjet: numeroProjet, 
            description: description, 
            dateDebut: dateDebut, 
            dateFin: dateFin, 
            budget: budget,
            responsable: responsable, 
            partenaires: partenaires, 
            soumissionaire: soumissionaire, 
            maitreDoeuvrage  :  this.maitreDoeuvrage, 
            caracteristiqueTechniques: this.caracteristiqueTechniques, 
            secteur: secteur,
            controllleur : controlleur,
            typeMarche: typeMarche,
            region: regions,
            maitreDeouvre: maitreDeouvre,
            maitreDeouvreDelegue: maitreDeouvreDelegue
        
        };


        this.service.createMyProject(_data).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');
                }
            }
        );

    }

}
