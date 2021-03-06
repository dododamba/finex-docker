import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet-carateristique-create',
  templateUrl: './projet-carateristique-create.component.html',
  styleUrls: ['./projet-carateristique-create.component.scss']
})
export class ProjetCarateristiqueCreateComponent implements OnInit {

  public caracteristiqueTechniques: any = [];
  public natures: string[] = [
    'date', 'numerique', 'décimale', 'chaine de charactère'
  ];
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

  isDate(assertion: string) {
    return assertion === 'date' ? true : false;
}

goBack(){
  this.router.navigateByUrl('projets/caracterisque/' + this.slug);
}


getSlug() {
  this.route.params.subscribe(params => {
      this.routeParams = params;
      this.slug = this.routeParams.slug;


  });
}

  addCaracTechnique(libelleD: string, valeurD: any, natureD: string) {
    const caracteristiqueTechniques = {
        libelle: libelleD,
        valeur: valeurD,
        nature: natureD
    };
    this.caracteristiqueTechniques.push(caracteristiqueTechniques);
  }

  initForm() {
    this.fGroup = this.fb.group(
        {
        
            valeur: [''],
            nature: [''],
            libelle: ['']
        }
    );
}

submit(){
   const _data  = {
     projetSlug : this.slug,
     caracteristiqueTechniques: this.caracteristiqueTechniques
   }

   this.service.addCaracteristiques(_data).subscribe(
      (response : any) => {
         if(response.status){
            Swal.fire('Enregistrement',''+response.message,'success')
         }
      }
   )

}


}
