import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {ITypeMarche} from '../type-marche';
import {TypeMarcheService} from '../type-marche.service';

@Component({
    selector: 'app-type-marche-list',
    templateUrl: './type-marche-list.component.html',
    styleUrls: ['./type-marche-list.component.scss']
})
export class TypeMarcheListComponent implements OnInit {

    types: ITypeMarche[];

    constructor(protected service: TypeMarcheService, protected router: Router) {
    }

    ngOnInit() {
        this.fetch(1);
    }

    parseDate(date: string) {
        return date = moment().locale('fr').format('dddd, MMMM Do YYYY, h:mm:ss a');
    }


    fetch(page: number) {
        this.service.fetch(page).subscribe(
            (res: any) => {
                this.types = res._embeded.typeMarches.content;
            }
        );
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('type-marches/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('type-marches/edit/' + slug);

    }


    onDelete(item: ITypeMarche) {
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
                this.service.delete(item.slug).subscribe(
                    (response: any) => {
                        const message = response.message;
                        const display = true;
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
}
