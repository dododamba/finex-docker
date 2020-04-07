import {Component, OnInit} from '@angular/core';
import {IMaitreOeuvrage} from '../maitre-oeuvrage';
import {MaitreOeuvrageService} from '../maitre-oeuvrages.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-maitre-oeuvrages-list',
    templateUrl: './maitre-oeuvrages-list.component.html',
    styleUrls: ['./maitre-oeuvrages-list.component.css']
})
export class MaitreOeuvragesListComponent implements OnInit {
    maitres: IMaitreOeuvrage[];

    constructor(private service: MaitreOeuvrageService, protected router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }


    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
                this.maitres = response._embeded.entitys.content;
            }
        );
    }


    show(slug: string) {
        this.router.navigateByUrl('maitre-oeuvrages/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('maitre-oeuvrages/edit/' + slug);

    }

    delete(item: IMaitreOeuvrage) {
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
