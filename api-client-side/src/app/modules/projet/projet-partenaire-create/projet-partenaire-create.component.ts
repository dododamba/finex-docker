import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { IProjet } from '../projet';
import { IPartenaire } from '../../partenaire/partenaire';
import { ProjetService } from '../projet.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITypePartenaire } from '../../type-partenaire/type-partenaire';
import { PartenaireService } from '../../partenaire/partenaire.service';
import { TypePartenaireService } from '../../type-partenaire/type-partenaire.service';
import { PartenaireCreateRequest } from 'src/app/requests/partenaire-create-request';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projet-partenaire-create',
  templateUrl: './projet-partenaire-create.component.html',
  styleUrls: ['./projet-partenaire-create.component.scss']
})
export class ProjetPartenaireCreateComponent implements OnInit {

  slug: string;
  routeParams: Params;
  projet: IProjet;
  partenaires: IPartenaire[];
  fGroup: FormGroup;
  gGroup: FormGroup;

    typePartenaires: ITypePartenaire[];
    typePartenaire: ITypePartenaire;

  public selectParam = {};

  constructor(private projetService: ProjetService,
              private router: Router, private route: ActivatedRoute,
              private service: PartenaireService,
              private fb: FormBuilder,
              private typePartenaireService: TypePartenaireService) {
      this.getSlug();
  }

  ngOnInit() {
     this.getPartenaires();
     this.getTypePartenaire();

      this.selectParameter(true);
      this.getSlug();
      this.select(this.slug);
      this.initForm();
      this.initInputForm();
      
  }

  selectParameter(status: boolean){
    return status ? this.selectParam = {input: true,select : false} :  this.selectParam = {input: false,select : true};
  }

  getSlug() {
      this.route.params.subscribe(params => {
          this.routeParams = params;
          this.slug = this.routeParams.slug;
       });
  }



  getMontant(montantTotal: number, montantEncaisse: number) {
      const resultat = montantTotal - montantEncaisse;
      return resultat > 0 ? resultat : 'Montant à percevoire deja depassé';
  }



  select(slug: string) {
      this.projetService.find(slug).subscribe(
          (res: any) => {
              this.projet = res._embeded.projet;
              console.log(this.projet);
          }
      );
  }


  getPartenaires(){
    this.service.fetchAll().subscribe(
      (response: any) => {
         this.partenaires = response._embeded.partenaires;
      }
    )
  }


  goToAddPartenaire() {
      this.router.navigate(['projets/mes-partenaires/create/', this.slug]);
  }

  initForm() {
    this.fGroup = this.fb.group(
        {
            partenaire:  ['', Validators.required],
        }
    );
}


initInputForm() {
  this.gGroup = this.fb.group(
      {
        nom: ['', Validators.compose([Validators.required, Validators.min(3)])],
        typePartenaire: ['', Validators.required]
      }
  );
}




showTypePartenaire(slug: string) {
    this.typePartenaireService.find(slug).subscribe(
        (res: any) => {
            this.typePartenaire = res._embeded.typePartenaire;
        }
    );
}

getTypePartenaire() {
    this.typePartenaireService.fetchNoPagination().subscribe(
        (res: any) => {
            this.typePartenaires = res._embeded.typePartenaires;
        }
    );
}

addToArray(value: string){
  this.fGroup.get('partenaire');

}

formSelect() {
    const data = {
      partenaire : this.fGroup.value.partenaire,
      projet: this.slug
    }  

    this.service.addPartenaireFromSelectProjet(data).subscribe(
      (data: any) =>{
          if (data.status) {
             Swal.fire('Enregistrement effectué','','success')
          }
      }
    )


}

formInput(){

}

}
