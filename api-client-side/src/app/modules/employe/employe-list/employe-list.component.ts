import {Component, OnInit} from '@angular/core';
import {EmployeService} from '../employe.service';
import {IEmploye} from '../employe';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-employe-list',
    templateUrl: './employe-list.component.html',
    styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {
    employe: IEmploye[];

    constructor(protected service: EmployeService, protected router: Router) {
    }

    ngOnInit() {
        this.fetch();
    }

    fetch() {
        this.service.query().subscribe(
            (res: any) => {
                this.employe = res._embeded.employes;
            }
        );
    }


    onDetail(slug: string) {
        this.router.navigateByUrl('employe/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('employe/edit' + slug);

    }

    onDelete(item: IEmploye) {
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
