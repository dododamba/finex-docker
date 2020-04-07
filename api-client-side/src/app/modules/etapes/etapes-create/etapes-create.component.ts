import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProjet} from '../../projet/projet';
import {ProjetService} from '../../projet/projet.service';
import {EtapeService} from '../etapes.service';
import {IGroupeTravail} from '../../groupe-travail/groupe-travail';
import {Etape} from '../etapes';

@Component({
    selector: 'app-etapes-create',
    templateUrl: './etapes-create.component.html',
    styleUrls: ['./etapes-create.component.css']
})
export class EtapesCreateComponent implements OnInit {

    fGroup: FormGroup;
    projets: IProjet[];
    groupes: any[];
    groupe: IGroupeTravail;
    datePickerConfig = {};

    constructor(
        private projetService: ProjetService,
        private service: EtapeService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.datePickerConfig = {
            locale: 'fr',
            format: 'DD.MM.YYYY',
            monthFormat: 'MMMM, YYYY',
            firstDayOfWeek: 'mo'
        };
        this.getProjet();
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                description: [''],
                dateDebut: ['', Validators.required],
                dateFin: ['', Validators.required],
                cout: ['', Validators.required],
                groupeSlug: ['', Validators.required],

            }
        );
    }


    submit() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;
        const dateDebut = this.fGroup.value.dateDebut;
        const dateFin = this.fGroup.value.dateFin;
        const cout = this.fGroup.value.cout;
        const groupeSlug = this.fGroup.value.groupeSlug;


        let date = new Date(dateDebut);


        const request = new Etape(null, nom, null, description, dateDebut, dateFin, cout, groupeSlug);

        console.log(date);
        this.service.create(request).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');

                }
            }
        );
    }


    getProjet() {
        this.projetService.fetchAvailbleGroupe().subscribe(
            (response: any) => {
                this.groupes = response._embeded.groupes;
            }
        );
    }

}
