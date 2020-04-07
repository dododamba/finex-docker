import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {IEtape} from '../etapes';
import {EtapeService} from '../etapes.service';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-etapes-list',
    templateUrl: './etapes-list.component.html',
    styleUrls: ['./etapes-list.component.css']
})
export class EtapesListComponent implements OnInit {

    etapes: IEtape[];
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

    constructor(private service: EtapeService, private router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }

    parseDate(date: string) {
        return date = moment().format('dd/MM/YYYY');
    }

    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
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


    nextPage() {
        const _page = this.pageNumber + 2;
        this.getPage(_page);

    }

    previewPage() {
        const _page = this.pageNumber;
        this.getPage(_page);

    }


    show(slug: string) {
        this.router.navigateByUrl('etapes/show/' + slug);
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
