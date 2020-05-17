import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../projet.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-projet-objectif-create',
  templateUrl: './projet-objectif-create.component.html',
  styleUrls: ['./projet-objectif-create.component.scss']
})
export class ProjetObjectifCreateComponent implements OnInit {

  public objectifs: any = [];

  fGroup: FormGroup;
  slug: string;
  routeParams: Params;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ProjetService,  
     private route: ActivatedRoute

  ) {
     this.getSlug()
   }

  ngOnInit() {
    this.initForm();
  }

  
goBack(){
  this.router.navigateByUrl('projets/objectif/' + this.slug);
}


getSlug() {
  this.route.params.subscribe(params => {
      this.routeParams = params;
      this.slug = this.routeParams.slug;


  });
}

addObjectif(libelleD: string, indicateur: any, contenuD: string) {
    const objectifs = {
        libelle: libelleD,
        indicateur: indicateur,
        contenu: contenuD
    };
    this.objectifs.push(objectifs);
    console.log(this.objectifs)
  }

  initForm() {
    this.fGroup = this.fb.group(
        {
        
            indicateur: [''],
            contenu: [''],
            libelle: ['']
        }
    );
}

submit(){
   const _data  = {
     projetSlug : this.slug,
     objectifs: this.objectifs
   }

   this.service.addObjectifs(_data).subscribe(
      (response : any) => {
         if(response.status){
            Swal.fire('Enregistrement',''+response.message,'success')
         }
      }
   )

}


}
