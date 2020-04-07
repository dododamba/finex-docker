import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {DecaissementService} from '../decaissement.service';
import {IDecaissement} from '../decaissement';

@Component({
    selector: 'app-decaissement-list',
    templateUrl: './decaissement-list.component.html',
    styleUrls: ['./decaissement-list.component.css']
})
export class DecaissementListComponent implements OnInit {

    constructor(private service: DecaissementService, private router: Router) {
    }

    ngOnInit() {
    }


    onDetail(slug: string) {
        this.router.navigateByUrl('decaissements/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('decaissements/edit/' + slug);

    }

    onDelete(item: IDecaissement) {
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
