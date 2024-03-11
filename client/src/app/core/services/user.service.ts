import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {

    userInfo = new  BehaviorSubject<object>({});

    ChangeInfo(value: object) {
        this.userInfo.next(value);
    }

    constructor(private http: HttpClient) {}

    GetAllUsers(): Observable<any> {
        return this.http.get(`${environment.server}/user/all`);
    }

    GetUser(username: string): Observable<any> {
        return this.http.get(`${environment.server}/user/${username}`);
    }

    ModifyUser(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/user`, body);
    }
}
