import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class EmployersService {

    constructor(private http: HttpClient) {}

    GetEmployersComment(): Observable<any> {
        return this.http.get(`${environment.server}/employers`);
    }

    GetEmployersCommentForAdmin(): Observable<any> {
        return this.http.get(`${environment.server}/employers/admin`);
    }

    GetEmployersCommentOne(id: number): Observable<any> {
        return this.http.get(`${environment.server}/employers/${id}`)
    }

    CreateEmployersComment(body: any): Observable<any> {
        return this.http.post(`${environment.server}/employers`, body);
    }

    ModifyEmployersComment(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/employers`, body);
    }
}
