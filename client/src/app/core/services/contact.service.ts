import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactService {
    constructor(private http: HttpClient) {}

    CreateComment(body: object): Observable<any> {
        return this.http.post(`${environment.server}/contact/comment`, body);
    }
}
