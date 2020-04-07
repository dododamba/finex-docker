import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ActivatedRoute, Params, Router} from '@angular/router';
import * as moment from 'moment';
import {EtapeService} from '../../etapes/etapes.service';
import {IEtape} from '../../etapes/etapes';
import {ProjetService} from '../projet.service';
import {IProjet} from '../projet';


@Component({
    selector: 'app-projet-etapes',
    templateUrl: './projet-etapes.component.html',
    styleUrls: ['./projet-etapes.component.scss']
})
export class ProjetEtapesComponent implements OnInit {
    slug: string;
    routeParams: Params;
    etapes: IEtape[];
    projet: IProjet;
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

    constructor(private projetService: ProjetService, private service: EtapeService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
        this.getPage(1, this.slug);
    }

    parseDate(date: string) {
        return date = moment().format('dd/MM/YYYY');
    }

    getPage(_page: number, projetSlug: string) {
        this.service.getByGroup(_page, this.slug).subscribe(
            (response: any) => {
                console.log(response);
                this.etapes = response._embeded.etapes.content;
                this.totalElements = response._embeded.etapes.totalElements;
                this.totalPages = response._embeded.etapes.totalPages;
                this.last = response._embeded.etapes.last;
                this.first = response._embeded.etapes.first;
                this.sort = response._embeded.etapes.first;
                this.size = response._embeded.etapes.size;
                this.number = response._embeded.etapes.number;
                this.numberOfElements = response._embeded.etapes.numberOfElements;
                this.empty = response._embeded.etapes.empty;
                this.pageNumber = response._embeded.etapes.pageable.pageNumber;

            }
        );
    }

    select(slug: string) {
        this.projetService.find(slug).subscribe(
            (res: any) => {
                this.projet = res._embeded.projet;
                this.etapes = res._embeded.projet.etapes;
            }
        );
    }


    getSlug() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;


        });
    }

    show(slug: string) {
        this.router.navigateByUrl('projets/etapes/detail/' + slug);
    }

    create(slug: string) {
        this.router.navigateByUrl('projets/etapes/create/' + this.slug);
    }

    edit(slug: string) {
        this.router.navigateByUrl('etapes/edit/' + slug);

    }


    delete(item: string) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le etapes ansi que toutes les taches  seront supprimés !',
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
                this.service.delete(item).subscribe(
                    (response: any) => {
                        const message = response.message;
                        const display = true;
                        this.initDisplay(true, message);
                        this.getPage(this.pageNumber + 1, this.slug);
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

    ngAfterViewInit() {
        this.initDisplay(false, null);
    }
}
