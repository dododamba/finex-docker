import {Component, OnInit} from '@angular/core';
import {IInstitution} from '../institution';
import {InstitutionService} from '../institution.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-institution-list',
    templateUrl: './institution-list.component.html',
    styleUrls: ['./institution-list.component.css']
})
export class InstitutionListComponent implements OnInit {

    types: IInstitution[];

    constructor(protected service: InstitutionService, protected router: Router) {
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


    show(slug: string) {
        this.router.navigateByUrl('institutions/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('institutions/edit/' + slug);

    }

    delete(item: IInstitution) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Suppression',
            text: 'Supprimer ce item  ?',
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
                /* this.service.delete(item.slug).subscribe(
                    (response: any) => {
                      const message = response.message;
                      const display = true;
                     // this.getPage(this.pageNumber + 1);
                    }
                 );*/
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
