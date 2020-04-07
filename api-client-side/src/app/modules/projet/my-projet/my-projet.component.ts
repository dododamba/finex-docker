import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {IPartenaire} from '../../partenaire/partenaire';
import {IEmploye} from '../../employe/employe';
import {PartenaireService} from '../../partenaire/partenaire.service';
import {EmployeService} from '../../employe/employe.service';
import {environment} from 'src/environments/environment';
import {ProjetService} from '../projet.service';
import {MaitreOeuvrageService} from '../../maitre-oeuvrages/maitre-oeuvrages.service';
import {SoumissionaireService} from '../../soumissionaires/soumissionaire.service';
import {ISoumissionaire} from '../../soumissionaires/soumissionaire';
import {IMaitreOeuvrage} from '../../maitre-oeuvrages/maitre-oeuvrage';
import {SecteurService} from '../../secteur/secteur.service';
import {ISecteur} from '../../secteur/secteur';
import {IControlleur} from '../../controlleur/controlleur';
import {ControlleurService} from '../../controlleur/controlleur.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {IProjet} from '../projet';

declare var $: any;


@Component({
    selector: 'app-my-projet',
    templateUrl: './my-projet.component.html',
    styleUrls: ['./my-projet.component.css']
})
export class MyProjetComponent implements OnInit {

    projets: IProjet[];
    partenaires: IPartenaire[];
    employes: IEmploye[];
    soumissionaires: ISoumissionaire[];
    maitreOeuvrages: IMaitreOeuvrage[];
    partenaireArray: any[];
    secteurs: ISecteur[];
    controlleurs: IControlleur[];
    employe: IEmploye;
    choisir: boolean;
    creer: boolean;
    env = environment;
    totalPages;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: number;
    size: number;
    number: number;
    numberOfElements: number;
    empty: number;
    pageNumber: number;
    message: string;
    display: boolean;
    maitreOeuvrage: string;


    constructor(private service: ProjetService, private router: Router,
                private spinnerService: Ng4LoadingSpinnerService,
                private partenaireService: PartenaireService,
                private employeService: EmployeService,
                private maitreOeuvrageService: MaitreOeuvrageService,
                private soumissionaireService: SoumissionaireService,
                private secteurService: SecteurService,
                private controlleurService: ControlleurService,
    ) {
    }

    ngOnInit() {
        this.getSlug();
        console.log(this.maitreOeuvrage);

        this.getPage(1);
        this.initDisplay(false, null);

    }


    getSlug() {
        const parsedEmploye = JSON.parse(localStorage.getItem('employe'));
        this.maitreOeuvrage = parsedEmploye.direction.institution.slug;
    }

    getCurrentEmployeDetail(slug: string) {
        this.employeService.findByUser(slug).subscribe((res: any) => {
            this.employe = res._embeded.employe;
            this.maitreOeuvrage = this.employe.direction.institution.slug;
            console.log(this.employe, this.maitreOeuvrage);
        });
    }

    getPage(_page: number) {

        this.service.select(this.maitreOeuvrage, _page).subscribe(
            (response: any) => {
                this.projets = response._embeded.projets.content;
                console.log(this.projets);
                this.totalElements = response._embeded.projets.totalElements;
                this.totalPages = response._embeded.projets.totalPages;
                this.last = response._embeded.projets.last;
                this.first = response._embeded.projets.first;
                this.sort = response._embeded.projets.first;
                this.size = response._embeded.projets.size;
                this.number = response._embeded.projets.number;
                this.numberOfElements = response._embeded.projets.numberOfElements;
                this.empty = response._embeded.projets.empty;
                this.pageNumber = response._embeded.projets.pageable.pageNumber;

            }
        );
    }


    nextPage() {
        // tslint:disable-next-line: variable-name
        const _page = this.pageNumber + 2;
        this.getPage(_page);
    }

    show() {
        this.spinnerService.show();
        setTimeout(() => this.spinnerService.hide(), 3000);
    }


    previewPage() {
        const _page = this.pageNumber;
        this.getPage(_page);
    }


    onDetail(slug: string) {
        this.router.navigateByUrl('projets/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('projets/edit' + slug);

    }

    onDelete(item: IProjet) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le projet ansi que toutes les taches et espace de travail seront supprimer !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Succès!',
                    'Item supprimé avec succès !.',
                    'success'
                );
                this.service.delete(item.slug).subscribe(
                    (response: any) => {
                        const message = response.message;
                        const display = true;
                        this.initDisplay(true, message);
                        this.getPage(this.pageNumber + 1);
                    }
                );
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Annuler',
                    '',
                    'error'
                );
            }
        });
    }


    initDisplay(display: boolean, message: string) {
        this.display = display;
        this.message = message;
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngAfterViewInit() {
        this.initDisplay(false, null);
    }


}
