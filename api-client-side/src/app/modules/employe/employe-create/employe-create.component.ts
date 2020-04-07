import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Direction, IDirection} from '../../direction/direction';
import {EmployeService} from '../employe.service';
import {DirecIDirectionService} from '../../direction/direction.service';
import {Employe} from '../employe';
import {EmployeCreateRequest} from 'src/app/requests/employe-create-request';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-employe-create',
    templateUrl: './employe-create.component.html',
    styleUrls: ['./employe-create.component.css']
})
export class EmployeCreateComponent implements OnInit {
    directions: IDirection[];
    fGroup: FormGroup;
    successMessage: string;
    direction: Direction;
    createRequest: EmployeCreateRequest;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private service: EmployeService,
        private directionService: DirecIDirectionService) {
        this.initForm();

    }

    ngOnInit() {
        this.fetchDirection();
        this.initForm();
        this.successMessage = null;
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                prenom: ['', Validators.required],
                matricule: ['', Validators.required],
                direction: ['', Validators.required],
                dateNaissance: [''],
                salaire: [''],
                dateEmbauche: ['']

            }
        );
    }

    fetchDirection() {
        this.directionService.query().subscribe(
            (res: any) => {
                this.directions = res._embeded.directions;
            }
        );
    }

    create() {
        // this.getDirection(this.fGroup.value.direction);
        const employe = new Employe(
            null,
            this.fGroup.value.nom,
            this.fGroup.value.prenom,
            this.fGroup.value.matricule,
            this.fGroup.value.dateNaissance,
            this.fGroup.value.dateEmbauche,
            Number(this.fGroup.value.salaire),
            null);
        const createRequest = {
            employe,
            directionSlug: this.fGroup.value.direction
        };
        this.createRequest = createRequest;

        this.service.create(this.createRequest).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Enregistrement!',
                        res.message,
                        'success'
                    );

                }
            }
        );
    }

    private getDirection(slug: string) {
        this.directionService.find(slug).subscribe(
            (res: any) => {
                this.direction = res._embeded.direction;
            }
        );
    }

}
