import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {IControlleur} from '../controlleur';
import {ControlleurService} from '../controlleur.service';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
    selector: 'app-controlleur-list',
    templateUrl: './controlleur-list.component.html',
    styleUrls: ['./controlleur-list.component.scss']
})
export class ControlleurListComponent implements OnInit {
    controlleurs: IControlleur[];
    todayISOString: string = new Date().toISOString();

    constructor(protected service: ControlleurService, private router: Router) {
    }

    ngOnInit() {
        this.fetch(1);

    }

    fetch(page: number) {
        this.service.fetch(page).subscribe(
            (res: any) => {
                this.controlleurs = res._embeded.entitys.content;
            }
        );
    }

    parseDate(date: string) {
        return date = moment().locale('fr').format('dddd, MMMM Do YYYY, h:mm:ss a');
    }

    show(slug: string) {
        this.router.navigateByUrl('controlleurs/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('controlleurs/edit/' + slug);

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


}
