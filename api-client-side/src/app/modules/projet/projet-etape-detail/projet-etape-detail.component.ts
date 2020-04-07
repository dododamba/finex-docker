import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { IEtape } from '../../etapes/etapes';
import { EtapeService } from '../../etapes/etapes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet-etape-detail',
  templateUrl: './projet-etape-detail.component.html',
  styleUrls: ['./projet-etape-detail.component.scss']
})
export class ProjetEtapeDetailComponent implements OnInit {
  slug: string;
    routeParams: Params;
    etape: IEtape;
    totalPages;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: number;
    size: number;
    number: number;
    numberOfElements: number;
    empty: number;
    pageNumber: number;
    message: string;
    display: boolean;

    constructor( private service: EtapeService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
    }

 

  

    select(slug: string) {
        this.service.find(slug).subscribe(
            (res: any) => {
                this.etape = res._embeded.etape;
                console.log(this.etape);
            }
        );
    }


    getSlug() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;


        });
    }

    show(slug: string) {
        this.router.navigateByUrl('projets/etapes/detail/' + slug);
    }

    create() {
        this.router.navigateByUrl('projets/taches/create/' + this.slug);
    }

    edit(slug: string) {
        this.router.navigateByUrl('etapes/edit/' + slug);

    }


    delete(item: string) {
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
                this.service.delete(item).subscribe(
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
