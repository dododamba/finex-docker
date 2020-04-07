import {Component, OnInit} from '@angular/core';
import {TacheService} from '../../taches/tache.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ITache} from '../../taches/tache';

@Component({
    selector: 'app-mes-taches-list',
    templateUrl: './mes-taches-list.component.html',
    styleUrls: ['./mes-taches-list.component.css']
})
export class MesTachesListComponent implements OnInit {

    constructor(protected service: TacheService, protected router: Router) {
    }

    ngOnInit() {
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('mes-taches/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('mes-taches/edit/' + slug);

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
                        //   this.initDisplay(true,message);
                        //  this.getPage(this.pageNumber+1)
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
