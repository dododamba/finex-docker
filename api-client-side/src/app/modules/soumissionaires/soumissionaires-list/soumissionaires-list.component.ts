import {Component, OnInit} from '@angular/core';
import {ISoumissionaire} from '../soumissionaire';
import {SoumissionaireService} from '../soumissionaire.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-soumissionaires-list',
    templateUrl: './soumissionaires-list.component.html',
    styleUrls: ['./soumissionaires-list.component.css']
})
export class SoumissionairesListComponent implements OnInit {

    soumissionaires: ISoumissionaire[];

    constructor(private service: SoumissionaireService, private router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }


    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
                this.soumissionaires = response._embeded.entitys.content;
            }
        );
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('soumissionaires/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('soumissionaires/edit/' + slug);

    }


    onDelete(item: ISoumissionaire) {
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
                /*this.service.delete(item.slug).subscribe(
                            (response:any) => {
                              const message = response.message;
                              const display = true;
                               this.initDisplay(true,message);
                               this.getPage(this.pageNumber+1)
                            }
                         )*/
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
