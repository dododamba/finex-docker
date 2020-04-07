import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaitreDoeuvreDelegueService } from '../maitre-doeuvre-delegue.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-maitre-doeuvre-delegue-create',
  templateUrl: './maitre-doeuvre-delegue-create.component.html',
  styleUrls: ['./maitre-doeuvre-delegue-create.component.scss']
})
export class MaitreDoeuvreDelegueCreateComponent implements OnInit {

  fGroup: FormGroup;

    constructor(
        private service: MaitreDoeuvreDelegueService,
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
