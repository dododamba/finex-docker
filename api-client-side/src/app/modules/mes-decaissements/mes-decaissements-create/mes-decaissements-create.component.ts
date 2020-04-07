import {Component, OnInit} from '@angular/core';
import { IProjet } from '../../projet/projet';
import { IEntreprise } from '../../entreprise/entreprise';
import { ProjetService } from '../../projet/projet.service';
import { EntrepriseService } from '../../entreprise/entreprise.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IFinancement } from '../../financement/financement';
import { IPartenaire } from '../../partenaire/partenaire';
import { FinancementService } from '../../financement/financement.service';
import * as jsPDF from 'jspdf'


@Component({
    selector: 'app-mes-decaissements-create',
    templateUrl: './mes-decaissements-create.component.html',
    styleUrls: ['./mes-decaissements-create.component.scss']
})
export class MesDecaissementsCreateComponent implements OnInit {

    projets : IProjet[];
    projet: IProjet;
    entreprises : IEntreprise[];
    maitreOeuvrage: string;
    display: boolean;
    entreprise: IEntreprise;
    fGroup: FormGroup;
    projetSlug: string;
    entrepriseSlug: string;
    financementSlug: string;
    partenaireSlug: string;
    financements: IFinancement[];
    financement: IFinancement;
    partenaires: IPartenaire[];

    view = {
        form : null,
        preview : null,
    }


    constructor(private projetService : ProjetService, private entrepriseService: EntrepriseService, private financementService : FinancementService , private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loadProject(),
        this.view = {
            form : true,
            preview : false,
        }
         this.entreprises = null;
         this.financements = null;

        this.initForm()
    }

    loadProject(){
        this.getSlug()
        this.projetService.myProject(this.maitreOeuvrage).subscribe(
            (data: any) => {
                this.projets = data._embeded.projets;
            }
        )

    }

    onProjectSelected(projet: string){
      this.getSpecificProject(projet);
      if(this.projet.entreprises){
        this.entreprises = this.projet.entreprises
      }

      if(this.projet.financements){
          this.financements = this.projet.financements;
      }
    }


    

    getSpecificProject(slug: string){
        this.projetService.find(slug).subscribe(
            (data: any) => {
              this.projet = data._embeded.projet;
              this.projetSlug = this.projet.slug;
            }
        )
    }

    getFinancement(slug: string){
        this.financementService.find(slug).subscribe(
            (data : any) => {
                this.financement  = data._embeded.financement;
                this.partenaires =  this.financement.partenaires;
                this.financementSlug = this.financement.slug;
            }
        )
    }

    getSpecificEntreprise(slug: string){
        this.entrepriseService.find(slug).subscribe(
            (data: any) => {
                this.entreprise = data._embeded.entreprise;
                this.entrepriseSlug = this.entreprise.slug;
            }
        )
    }


    onEntrepresiseSelected(entreprise: string){
        this.display = true;
        this.getSpecificEntreprise(entreprise);
    }

    getSlug() {
        const parsedEmploye = JSON.parse(localStorage.getItem('employe'));
        this.maitreOeuvrage = parsedEmploye.direction.institution.slug;
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                montant: ['', Validators.required],
                devise: ['', Validators.required],
                methode: ['', Validators.required],
                note: [''],
                fichier: [''],
                fichiersup: ['']
    
            }
        );
    }


    showForm(state : number){
        if(state == 0){
            this.view = {
                form : true,
                preview : false,
            }
        }else{
            this.view = {
                form : false,
                preview : true,
            }
        }
    }

    imprimer(){
        var doc = new jsPDF({
            orientation: 'landscape',
            unit: 'in',
            format: [4, 2]
          })
           
          doc.text('Hello world!', 1, 1)
          doc.save('demande.pdf')
    }

    submit(){
        var data = {
            montant: this.fGroup.value.montant,
            devise: this.fGroup.value.devise,
            methodeDecaissement: this.fGroup.value.methodeDecaissement,
            note: this.fGroup.value.note,
            fichier: this.fGroup.value.fichier,
            fichiersup: this.fGroup.value.fichiersup,
            
            projet: this.projetSlug,
            entreprise: this.entrepriseSlug,
            maitreDouvrage: this.maitreOeuvrage,
            financement: this.financementSlug
      
        }

        console.log(data)
    }

    
}
