import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    env = environment;

    constructor(private router: Router) {
    }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.getItem(this.env.CONNECTED_USER)) {
            return true;
        }

        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});

        return false;
    }

}
