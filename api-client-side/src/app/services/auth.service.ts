import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {ConnectedUser} from '../models/connected-user';

const headers = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'})
};


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    env = environment;
    connectedUser: ConnectedUser;


    constructor(private http: HttpClient, private router: Router) {
    }

    public getLogin(usernameOrEmail: string, password: string) {

        const data = {
            usernameOrEmail,
            password
        };


        this.http.post(this.env.baseUrl + 'auth/login', data, headers).subscribe(
            (res: any) => {
                this.connectedUser = {
                    userId: res._embeded.user.id,
                    avatar: res._embeded.user.avatar,
                    slug: res._embeded.user.slug,
                    username: res._embeded.user.username,
                    email: res._embeded.user.email,
                    role: res._embeded.user.roles,
                    accessToken: res._embeded.jwt.accessToken,
                };
                localStorage.setItem('role', JSON.stringify(this.connectedUser.role));
                localStorage.setItem(this.env.CONNECTED_USER, JSON.stringify(this.connectedUser));
                localStorage.setItem(this.env.TOKEN_TYPE, 'Bearer');
                localStorage.setItem(this.env.TOKEN_KEY, this.connectedUser.accessToken);

                this.router.navigateByUrl('workgroups/list');
            }
        );
    }


    public logout() {
        localStorage.removeItem(this.env.CONNECTED_USER);
        localStorage.removeItem(this.env.TOKEN_KEY);
        localStorage.removeItem(this.env.TOKEN_TYPE);
        localStorage.removeItem('role');

        this.router.navigateByUrl('login');
    }


    public sessionExists() {
        return localStorage.getItem(this.env.CONNECTED_USER) != null;
    }

    public  tokenIsAlwaysWorking(token:string){
        return localStorage.getItem(this.env.CONNECTED_USER) == token;
    }

}
