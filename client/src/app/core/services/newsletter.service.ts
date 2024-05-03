import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class NewsletterService {

    constructor(private http: HttpClient) {}

    CreateNewsletter(body: any): Observable<any> {
        return this.http.post(`${environment.server}/newsletter`, body);
    }

    GetNewsletter(query: any): Observable<any> {
        return this.http.get(`${environment.server}/newsletter`, { params: query });
    }

    GetAllNewsletters(): Observable<any> {
        return this.http.get(`${environment.server}/newsletter/all`);
    }

    ModifyNewsletter(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/newsletter`, body);
    }
}
