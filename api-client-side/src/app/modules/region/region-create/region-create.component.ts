import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProjet} from '../../projet/projet';
import {IGroupeTravail} from '../../groupe-travail/groupe-travail';
import {ProjetService} from '../../projet/projet.service';
import {EtapeService} from '../../etapes/etapes.service';
import {Etape} from '../../etapes/etapes';
import Swal from "sweetalert2";
import {Region} from '../region';
import {RegionService} from '../region.service';

@Component({
    selector: 'app-region-create',
    templateUrl: './region-create.component.html',
    styleUrls: ['./region-create.component.scss']
})
export class RegionCreateComponent implements OnInit {

    fGroup: FormGroup;

    constructor(
        private service: RegionService,
        private fb: FormBuilder
    ) {
    }

    ngOnInit() {
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                description: [''],
                cheflieux: ['', Validators.required],
            }
        );
    }


    submit() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;
        const cheflieux = this.fGroup.value.cheflieux;




        const request = {
            nom : nom,
            cheflieux: cheflieux, 
            description : description
        }

        this.service.create(request).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');

                }
            }
        );
    }

}
