import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    returnUrl: string;
    fGroup: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService,
        private fb: FormBuilder
    ) {
        this.initForm();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';

        if (this.authenticationService.sessionExists()) {
            this.router.navigateByUrl('dashboard');
        }
    }

    initForm() {
        this.fGroup = this.fb.group(
            {
                email: ['', Validators.required],
                password: ['', Validators.required]
            }
        );
    }

    login() {
        this.authenticationService.getLogin(this.fGroup.value.email, this.fGroup.value.password);
    }


}
