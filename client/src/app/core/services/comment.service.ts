import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class CommentService {
    constructor(private http: HttpClient) {}

    GetComments(query: any): Observable<any> {
        return this.http.get(`${environment.server}/comment`, {params: query});
    }

    GetOneComment(query: any): Observable<any> {
        return this.http.get(`${environment.server}/comment/one`, {params: query});
    }

    GetAllComments(): Observable<any> {
        return this.http.get(`${environment.server}/comment/all`);
    }

    CreateComment(body: object): Observable<any> {
        return this.http.post(`${environment.server}/comment`, body);
    }
}
