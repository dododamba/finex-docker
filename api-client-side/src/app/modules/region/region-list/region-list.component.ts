import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {RegionService} from '../region.service';
import {IRegion} from '../region';

@Component({
    selector: 'app-region-list',
    templateUrl: './region-list.component.html',
    styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

    regions: IRegion[];

    constructor(protected service: RegionService, protected router: Router) {
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
                this.regions = res._embeded.regions.content;
            }
        );
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('regions/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('regions/edit/' + slug);

    }


    onDelete(item: IRegion) {
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
