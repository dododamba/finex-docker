import {Component, OnInit} from '@angular/core';
import {IRole} from '../role';
import {RoleService} from '../role.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
    roles: IRole[];

    constructor(protected service: RoleService, protected router: Router) {
    }

    ngOnInit() {
        this.fetch();
    }

    fetch() {
        this.service.query().subscribe(
            (res: any) => {
                this.roles = res._embeded.roles;
            }
        );
    }

    onDetail(slug: string) {
        this.router.navigateByUrl('mes-taches/' + slug);
    }


    onEdit(slug: string) {
        this.router.navigateByUrl('mes-taches/edit/' + slug);

    }


    onDelete(item: IRole) {
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
                    //  this.getPage(this.pageNumber+1)
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
