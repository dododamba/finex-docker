import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeService } from '../../employe/employe.service';
import { DirecIDirectionService } from '../direction.service';
import { InstitutionService } from '../../institution/institution.service';
import { Direction, IDirection } from '../direction';
import { IInstitution } from '../../institution/institution';
import { Employe } from '../../employe/employe';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-direction-create',
    templateUrl: './direction-create.component.html',
    styleUrls: ['./direction-create.component.css']
})
export class DirectionCreateComponent implements OnInit {

    directions: IDirection[];
    institutions: IInstitution[];
    fGroup: FormGroup;
    successMessage: string;
    direction: Direction;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private service: EmployeService,
        private institutionService : InstitutionService,
        private directionService: DirecIDirectionService) {
        this.initForm();

    }

    ngOnInit() {
        this.fetchInstitution();
        this.initForm();
        this.successMessage = null;
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                institution: ['', Validators.required],
                nomEmploye: ['', Validators.required],
                prenomEmploye: ['', Validators.required],
                emailEmploye: ['', Validators.required],
                description: ['', Validators.required],



            }
        );
    }

    fetchInstitution(){
        this.institutionService.fetchNoPagination().subscribe(
            (data: any) =>{
              this.institutions = data._embeded.entitys;
            }
        )
    }

    fetchDirection() {
        this.directionService.query().subscribe(
            (res: any) => {
                this.directions = res._embeded.directions;
            }
        );
    }

    goToListe(){
    this.router.navigate(['directions/list']);
    }


    create() {
        // this.getDirection(this.fGroup.value.direction);
       
        const requested = {
            nom:this.fGroup.value.nom,
            institution:this.fGroup.value.institution,
            nomEmploye:this.fGroup.value.nomEmploye,
            prenomEmploye:this.fGroup.value.prenomEmploye,
            description:this.fGroup.value.description,
            emailEmploye:this.fGroup.value.emailEmploye
        }
       

        this.directionService.create(requested).subscribe(
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
