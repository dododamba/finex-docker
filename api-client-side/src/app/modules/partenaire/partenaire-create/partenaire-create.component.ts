import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ITypePartenaire} from '../../type-partenaire/type-partenaire';
import {TypePartenaireService} from '../../type-partenaire/type-partenaire.service';
import {PartenaireService} from '../partenaire.service';
import Swal from 'sweetalert2';
import {PartenaireCreateRequest} from 'src/app/requests/partenaire-create-request';

@Component({
    selector: 'app-partenaire-create',
    templateUrl: './partenaire-create.component.html',
    styleUrls: ['./partenaire-create.component.css']
})
export class PartenaireCreateComponent implements OnInit {
    fGroup: FormGroup;
    typePartenaires: ITypePartenaire[];
    typePartenaire: ITypePartenaire;

    constructor(private service: PartenaireService,
                private router: Router,
                private fb: FormBuilder,
                private typePartenaireService: TypePartenaireService) {
    }

    ngOnInit() {
        this.initForm();
        this.getTypePartenaire();
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                nom: ['', Validators.compose([Validators.required, Validators.min(3)])],
                typePartenaire: ['', Validators.required]
            }
        );
    }

    showTypePartenaire(slug: string) {
        this.typePartenaireService.find(slug).subscribe(
            (res: any) => {
                this.typePartenaire = res._embeded.typePartenaire;
            }
        );
    }

    getTypePartenaire() {
        this.typePartenaireService.fetchNoPagination().subscribe(
            (res: any) => {
                this.typePartenaires = res._embeded.typePartenaires;
            }
        );
    }

    create() {
        const partenaire: PartenaireCreateRequest = {
            nom: this.fGroup.value.nom,
            typePartenaireSlug: this.fGroup.value.typePartenaire
        };

        this.service.create(partenaire).subscribe(
            (res: any) => {
                if (res.status) {
                    Swal.fire('Succès', res.message, 'success');
                    this.router.navigateByUrl('partenaire/list');
                }
            }
        );
    }


}
