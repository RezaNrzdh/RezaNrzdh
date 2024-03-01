import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class UserService {

    userInfo = new Subject<object>();

    ChangeInfo(value: object) {
        this.userInfo.next(value);
    }

    constructor(private http: HttpClient) {}

    GetAllUsers(): Observable<any> {
        return this.http.get(`${environment.server}`);
    }
}
