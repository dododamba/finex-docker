import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entreprise-create',
  templateUrl: './entreprise-create.component.html',
  styleUrls: ['./entreprise-create.component.scss']
})
export class EntrepriseCreateComponent implements OnInit {

  fGroup: FormGroup;

  constructor(
      private service: EntrepriseService,
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
