import {Component, OnInit} from '@angular/core';
import {ITache} from '../tache';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {TacheService} from '../tache.service';
import * as moment from 'moment';

@Component({
    selector: 'app-taches-list',
    templateUrl: './taches-list.component.html',
    styleUrls: ['./taches-list.component.css']
})
export class TachesListComponent implements OnInit {
    Taches: ITache[];
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


    constructor(private service: TacheService, private router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }

    parseDate(date: string) {
        return date = moment().format('dd/MM/YYYY');
    }

    // tslint:disable-next-line: variable-name
    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
                this.Taches = response._embeded.taches.content;
                this.totalElements = response._embeded.taches.totalElements;
                this.totalPages = response._embeded.taches.totalPages;
                this.last = response._embeded.taches.last;
                this.first = response._embeded.taches.first;
                this.sort = response._embeded.taches.first;
                this.size = response._embeded.taches.size;
                this.number = response._embeded.taches.number;
                this.numberOfElements = response._embeded.taches.numberOfElements;
                this.empty = response._embeded.taches.empty;
                this.pageNumber = response._embeded.taches.pageable.pageNumber;

            }
        );
    }

    getDetail(slug: string) {
        this.router.navigateByUrl('Tache/' + slug);
    }

    nextPage() {
        // tslint:disable-next-line: variable-name
        const _page = this.pageNumber + 2;
        this.getPage(_page);

    }

    previewPage() {
        // tslint:disable-next-line: variable-name
        const _page = this.pageNumber;
        this.getPage(_page);

    }

    onDetail(slug: string) {
        this.router.navigateByUrl('taches/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('taches/edit/' + slug);

    }


    onDelete(item: ITache) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le Taches ansi que toutes les taches  seront supprimés !',
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

    ngAfterViewInit() {
        this.initDisplay(false, null);
    }

}
