import {Component, OnInit} from '@angular/core';
import {ITypeFinancement} from '../type-financement';
import {TypeFinancementService} from '../type-financement.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-type-financement-list',
    templateUrl: './type-financement-list.component.html',
    styleUrls: ['./type-financement-list.component.css']
})
export class TypeFinancementListComponent implements OnInit {

    types: ITypeFinancement[];

    constructor(protected service: TypeFinancementService, protected router: Router) {
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
                this.types = res._embeded.entitys.content;
            }
        );
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('type-financements/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('type-financements/edit/' + slug);

    }


    onDelete(item: ITypeFinancement) {
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
                        //this.initDisplay(true,message);
                        //this.fetch(this.pageNumber+1)
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
