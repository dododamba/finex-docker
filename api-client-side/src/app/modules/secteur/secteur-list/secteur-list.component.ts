import {Component, OnInit} from '@angular/core';
import {ISecteur} from '../secteur';
import {SecteurService} from '../secteur.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
    selector: 'app-secteur-list',
    templateUrl: './secteur-list.component.html',
    styleUrls: ['./secteur-list.component.scss']
})
export class SecteurListComponent implements OnInit {

    secteurs: ISecteur[];
    todayISOString: string = new Date().toISOString();

    constructor(protected service: SecteurService, private router: Router) {
    }

    ngOnInit() {
        this.fetch(1);

    }

    fetch(page: number) {
        this.service.fetch(page).subscribe(
            (res: any) => {
                this.secteurs = res._embeded.entitys.content;
            }
        );
    }

    parseDate(date: string) {
        return date = moment().locale('fr').format('dddd, MMMM Do YYYY, h:mm:ss a');
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('secteur/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('secteur/edit/' + slug);

    }


    delete(slug: string) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Supprimer ?',
            text: 'Cet item sera supprimé !',
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
                   (response: any) => {
                     const message = response.message;
                     const display = true;
                   //  this.initDisplay(true, message);
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

    show(slug: string) {
        this.router.navigateByUrl('projets/' + slug);
    }

}
