import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {AuthService} from 'src/app/services/auth.service';
import {environment} from 'src/environments/environment';
import {EmployeService} from 'src/app/modules/employe/employe.service';
import {IEmploye} from 'src/app/modules/employe/employe';


@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})

export class AppLayoutComponent implements OnInit {

    env = environment;
    role: any;
    username: string;
    employe: IEmploye;
    slug: string;

    constructor(private authenticationService: AuthService, private employeService: EmployeService,
    ) {
        this.getConnectedUserDetal();
        this.getCurrentEmployeDetail();
    }

    ngOnInit() {

    }


    getConnectedUserDetal() {
        const user = localStorage.getItem(this.env.CONNECTED_USER);
        const jsonInfo = JSON.parse(user);
        this.slug = jsonInfo.slug;

        const role = JSON.parse(localStorage.getItem('role'));
        this.role = role[0].name;
        this.username = jsonInfo.username;
    }

    getCurrentEmployeDetail() {
        this.employeService.findByUser(this.slug).subscribe(
            (res: any) => {
                this.employe = res._embeded.employe;
                localStorage.setItem('employe', JSON.stringify(this.employe));

                console.log(this.employe);
            }
        );
    }

    logout() {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'button ripple-effect',
                cancelButton: 'button  dark ripple-effect'
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: 'Se Deconnecter?',
            text: 'Vous serez redirigé vers la page de connection !',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmer!',
            cancelButtonText: 'Annuler!',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    'Aurevoir!',
                    'A très bientot !.',
                    'success'
                );
                this.authenticationService.logout();
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Annuler',
                    '',
                    'error'
                );
            }
        });
    }

}
