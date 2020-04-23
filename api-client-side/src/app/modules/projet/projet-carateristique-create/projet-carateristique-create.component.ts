import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProjetService } from '../projet.service';

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


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private service: ProjetService,

  ) { }

  ngOnInit() {
    this.initForm();
  }

  isDate(assertion: string) {
    return assertion === 'date' ? true : false;
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

}


}
