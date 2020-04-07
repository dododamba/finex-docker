import {Component, OnInit} from '@angular/core';
import {DirecIDirectionService} from '../direction.service';
import {IDirection} from '../direction';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-direction-list',
    templateUrl: './direction-list.component.html',
    styleUrls: ['./direction-list.component.css']
})
export class DirectionListComponent implements OnInit {
    directions: IDirection[];

    constructor(protected service: DirecIDirectionService, protected router: Router) {
    }

    ngOnInit() {
        this.fetch();
    }

    fetch() {
        this.service.query().subscribe(
            (res: any) => {
                this.directions = res._embeded.directions;
            }
        );
    }


    show(slug: string) {
        this.router.navigateByUrl('direction/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('direction/edit/' + slug);

    }

    delete(item: IDirection) {
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
