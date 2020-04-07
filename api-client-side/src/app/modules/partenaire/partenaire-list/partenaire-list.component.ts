import {Component, OnInit} from '@angular/core';
import {IPartenaire} from '../partenaire';
import {PartenaireService} from '../partenaire.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-partenaire-list',
    templateUrl: './partenaire-list.component.html',
    styleUrls: ['./partenaire-list.component.css']
})
export class PartenaireListComponent implements OnInit {
    partenaires: IPartenaire[];
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

    constructor(private service: PartenaireService, private router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }

    getPage(page: number) {
        this.service.fetch(page).subscribe(
            (res: any) => {
                this.partenaires = res._embeded.partenaires.content;
                this.totalElements = res._embeded.partenaires.totalElements;
                this.totalPages = res._embeded.partenaires.totalPages;
                this.last = res._embeded.partenaires.last;
                this.first = res._embeded.partenaires.first;
                this.sort = res._embeded.partenaires.first;
                this.size = res._embeded.partenaires.size;
                this.number = res._embeded.partenaires.number;
                this.numberOfElements = res._embeded.partenaires.numberOfElements;
                this.empty = res._embeded.partenaires.empty;
                this.pageNumber = res._embeded.partenaires.pageable.pageNumber;
            }
        );
    }

    getDetail(slug: string) {
        this.router.navigateByUrl('projet/' + slug);
    }

    nextPage() {
        const _page = this.pageNumber + 2;
        this.getPage(_page);

    }

    previewPage() {
        const _page = this.pageNumber;
        this.getPage(_page);

    }

    onDetail(slug: string) {
        this.router.navigateByUrl('partenaires/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('partenaires/edit/' + slug);

    }


    onDelete(item: IPartenaire) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Le partenaire ansi que tous les financements ,documents et images relatifs seront supprimés!',
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
