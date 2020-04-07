import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MaitreOeuvrageService} from '../maitre-oeuvrages.service';
import Swal from 'sweetalert2';
import {MaitreOeuvrage} from '../maitre-oeuvrage';

@Component({
    selector: 'app-maitre-oeuvrages-create',
    templateUrl: './maitre-oeuvrages-create.component.html',
    styleUrls: ['./maitre-oeuvrages-create.component.css']
})
export class MaitreOeuvragesCreateComponent implements OnInit {
    fGroup: FormGroup;
    errors: any;

    constructor(private fb: FormBuilder, private service: MaitreOeuvrageService, private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }


    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.required],
                description: ['', Validators.compose([Validators.min(15), Validators.max(1000)])]
            }
        );
    }

    create() {
        const nom = this.fGroup.value.nom;
        const description = this.fGroup.value.description;


        const _data = new MaitreOeuvrage(null, nom, description, null);
        console.log(_data);


        this.service.create(_data).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire(
                        'Succès',
                        res.message,
                        'success'
                    );
                    this.router.navigateByUrl('maitre-oeuvrages/list');

                } else {
                    this.errors = res.errors;
                    console.log(this.errors);
                }
            }
        );
    }
}
