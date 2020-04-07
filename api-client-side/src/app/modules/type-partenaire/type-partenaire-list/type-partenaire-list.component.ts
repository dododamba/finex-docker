import {Component, OnInit} from '@angular/core';
import {ITypePartenaire} from '../type-partenaire';
import {TypePartenaireService} from '../type-partenaire.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-type-partenaire-list',
    templateUrl: './type-partenaire-list.component.html',
    styleUrls: ['./type-partenaire-list.component.css']
})
export class TypePartenaireListComponent implements OnInit {
    types: ITypePartenaire[];
    todayISOString: string = new Date().toISOString();

    constructor(protected service: TypePartenaireService, private router: Router) {
    }

    ngOnInit() {
        this.fetch(1);

    }

    fetch(page: number) {
        this.service.fetch(page).subscribe(
            (res: any) => {
                this.types = res._embeded.typePartenaires.content;
            }
        );
    }

    parseDate(date: string) {
        return date = moment().locale('fr').format('dddd, MMMM Do YYYY, h:mm:ss a');
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('type-partenaire/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('type-partenaire/edit/' + slug);

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
