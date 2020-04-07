import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptor implements HttpInterceptor {

    env = environment;

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (localStorage.getItem(this.env.TOKEN_KEY)) {
            const token = 'Bearer' + ' ' + localStorage.getItem(this.env.TOKEN_KEY);
            const authReq = request.clone({
                headers: request.headers.set('Authorization', token)
            });
            return next.handle(authReq);
        }
        return next.handle(request);

    }


}
