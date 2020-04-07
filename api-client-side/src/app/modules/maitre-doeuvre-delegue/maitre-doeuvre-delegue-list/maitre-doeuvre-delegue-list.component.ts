import { Component, OnInit } from '@angular/core';
import { MaitreDoeuvreDelegueService } from '../maitre-doeuvre-delegue.service';
import { Router } from '@angular/router';
import {IMaitreDoeuvreDelegue} from '../maitre-doeuvre-delegue';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-maitre-doeuvre-delegue-list',
  templateUrl: './maitre-doeuvre-delegue-list.component.html',
  styleUrls: ['./maitre-doeuvre-delegue-list.component.scss']
})
export class MaitreDoeuvreDelegueListComponent implements OnInit {

 
  maitres: IMaitreDoeuvreDelegue[];

  constructor(protected service: MaitreDoeuvreDelegueService, protected router: Router) {
  }

  ngOnInit() {
      this.fetch(1);
  }

  parseDate(date: string) {
  }


  fetch(page: number) {
      this.service.fetch(page).subscribe(
          (res: any) => {
              this.maitres = res._embeded.maitres.content;
          }
      );
  }

  onDetail(slug: string) {
      this.router.navigateByUrl('maitre-doeuvre-delegues/' + slug);
  }


  onEdit(slug: string) {
      this.router.navigateByUrl('maitre-doeuvre-delegues/edit/' + slug);

  }


  onDelete(item: IMaitreDoeuvreDelegue) {
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
