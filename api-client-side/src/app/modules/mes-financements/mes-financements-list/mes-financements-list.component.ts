import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {IFinancement} from '../../financement/financement';
import {Router} from '@angular/router';
import {FinancementService} from '../../financement/financement.service';
import * as moment from 'moment';


@Component({
    selector: 'app-mes-financements-list',
    templateUrl: './mes-financements-list.component.html',
    styleUrls: ['./mes-financements-list.component.scss']
})
export class MesFinancementsListComponent implements OnInit {

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

    getDetail(slug: string) {
        this.router.navigateByUrl('financements/' + slug);
    }

    onUpdate(slug: string) {
        this.router.navigateByUrl('financements/update/' + slug);
    }

    onEncaisser(slug: string, partenaire: string) {
        this.router.navigateByUrl('financements/encaisser/' + slug + '/partenaire/' + partenaire);
    }


    onDetail(slug: string) {
        this.router.navigateByUrl('mes-financements/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('mes-financements/edit/' + slug);

    }


    onDelete(item: IFinancement) {
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
