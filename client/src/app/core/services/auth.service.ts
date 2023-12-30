import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    SignUp(body: object): Observable<object> {
        return this.http.post(`${environment.server}/auth/signup`, body, { withCredentials: true });
    }

    SignIn(body: object): Observable<object> {
        return this.http.post(`${environment.server}/auth/signin`, body, { withCredentials: true });
    }

    Verify(): Observable<object> {
        return this.http.get(`${environment.server}/auth/verify`, { withCredentials: true });
    }


    SignOut(): any {

    }
}
