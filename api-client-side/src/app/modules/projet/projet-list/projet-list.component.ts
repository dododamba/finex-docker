import {Component, OnInit} from '@angular/core';
import {IProjet} from '../projet';
import {ProjetService} from '../projet.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
    selector: 'app-projet-list',
    templateUrl: './projet-list.component.html',
    styleUrls: ['./projet-list.component.css']
})
export class ProjetListComponent implements OnInit {

    projets: IProjet[];
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

    constructor(private service: ProjetService, private router: Router,
                private spinnerService: Ng4LoadingSpinnerService,) {
    }

    ngOnInit() {
        this.getPage(1);
        this.initDisplay(false, null);

    }

    parseDate(date: string) {
        return date = moment().format('dd/MM/YYYY');
    }

    // tslint:disable-next-line: variable-name
    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
                this.projets = response._embeded.projets.content;
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
