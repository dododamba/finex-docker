import {Component, OnInit} from '@angular/core';
import {IGroupeTravail} from '../groupe-travail';
import {GroupeTravailService} from '../groupe-travail.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
    selector: 'app-groupe-travail-list',
    templateUrl: './groupe-travail-list.component.html',
    styleUrls: ['./groupe-travail-list.component.css']
})
export class GroupeTravailListComponent implements OnInit {
    public groupes: IGroupeTravail[];
    public currentPage: number;
    public totalPage: number;
    public totalElement: number;

    constructor(private service: GroupeTravailService, private router: Router) {
    }

    ngOnInit() {
        this.getPage(1);
    }


    getPage(_page: number) {
        this.service.query(_page).subscribe(
            (response: any) => {
                this.groupes = response._embeded.entitys.content;
            }
        );
    }


    show(slug: string) {
        this.router.navigateByUrl('groupe-travail/show/' + slug);
    }


    edit(slug: string) {
        this.router.navigateByUrl('groupe-travail/edit/' + slug);

    }

    delete(item: IGroupeTravail) {
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
