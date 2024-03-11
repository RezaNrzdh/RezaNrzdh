import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ContactService {
    constructor(private http: HttpClient) {}

    CreateComment(body: object): Observable<any> {
        return this.http.post(`${environment.server}/contact/comment`, body);
    }

    GetInformation(): Observable<any> {
        return this.http.get(`${environment.server}/contact/info`);
    }

    GetAllContacts(): Observable<any> {
        return this.http.get(`${environment.server}/contact/find/all`);
    }

    GetContact(param: any): Observable<any> {
        return this.http.get(`${environment.server}/contact/${param}`);
    }
}
