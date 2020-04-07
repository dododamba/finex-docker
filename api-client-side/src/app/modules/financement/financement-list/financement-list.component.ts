import {Component, OnInit} from '@angular/core';
import {IFinancement} from '../financement';
import {FinancementService} from '../financement.service';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-financement-list',
    templateUrl: './financement-list.component.html',
    styleUrls: ['./financement-list.component.css']
})
export class FinancementListComponent implements OnInit {
    financements: any[];
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

    constructor(private service: FinancementService, private router: Router) {
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
                this.financements = response._embeded.entitys.content;
                this.totalElements = response._embeded.entitys.totalElements;
                this.totalPages = response._embeded.entitys.totalPages;
                this.last = response._embeded.entitys.last;
                this.first = response._embeded.entitys.first;
                this.sort = response._embeded.entitys.first;
                this.size = response._embeded.entitys.size;
                this.number = response._embeded.entitys.number;
                this.numberOfElements = response._embeded.entitys.numberOfElements;
                this.empty = response._embeded.entitys.empty;
                this.pageNumber = response._embeded.entitys.pageable.pageNumber;

            }
        );
    }


    onEncaisser(slug: string, partenaire: string) {
        this.router.navigateByUrl('financements/encaisser/' + slug + '/partenaire/' + partenaire);
    }

    show(slug: string) {
        this.router.navigateByUrl('financements/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('financements/edit/' + slug);

    }


    delete(item: IFinancement) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le financement sera supprimé !',
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


    nextPage() {
        const _page = this.pageNumber + 2;
        this.getPage(_page);

    }

    previewPage() {
        const _page = this.pageNumber;
        this.getPage(_page);

    }

}
