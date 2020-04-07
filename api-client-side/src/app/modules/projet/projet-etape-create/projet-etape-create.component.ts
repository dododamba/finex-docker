import {Component, OnInit} from '@angular/core';
import {ProjetService} from '../projet.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IProjet} from '../projet';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EtapeService} from '../../etapes/etapes.service';
import Swal from 'sweetalert2';
import {Etape} from '../../etapes/etapes';

@Component({
    selector: 'app-projet-etape-create',
    templateUrl: './projet-etape-create.component.html',
    styleUrls: ['./projet-etape-create.component.scss']
})
export class ProjetEtapeCreateComponent implements OnInit {

    slug: string;
    routeParams: Params;
    projet: IProjet;
    fGroup: FormGroup;
    datePickerConfig = {};

    constructor(private projetService: ProjetService,
                private router: Router, private route: ActivatedRoute, private service: EtapeService,
                private fb: FormBuilder) {
        this.getSlug();
    }

    ngOnInit() {
        this.getSlug();
        this.select(this.slug);
        this.datePickerConfig = {
            locale: 'fr',
            format: 'DD/MM/YYYY',
            monthFormat: 'MMMM, YYYY',
            firstDayOfWeek: 'mo'
        };
        this.initForm();
    }


    getSlug() {
        this.route.params.subscribe(params => {
            this.routeParams = params;
            this.slug = this.routeParams.slug;


        });
    }

    select(slug: string) {
        this.projetService.find(slug).subscribe(
            (res: any) => {
                this.projet = res._embeded.projet;
            }
        );
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

        const data = {
            nom: nom,
            description: description,
            dateDebut: dateDebut,
            dateFin: dateFin,
            cout: cout,
            projetSlug: this.slug
        };

        this.service.createForSpecificProject(data).subscribe(
            (response: any) => {
                if (response.status) {
                    Swal.fire('Succès', response.message, 'success');

                }
            }
        );
    }


}
