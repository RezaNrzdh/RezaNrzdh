import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ReplyService {
    constructor(private http: HttpClient) {}

    GetReplies(query: any): Observable<any> {
        return this.http.get(`${environment.server}/reply`, {params: query});
    }

    GetAllReplies(): Observable<any> {
        return this.http.get(`${environment.server}/reply/all`);
    }

    CreateReply(body: object): Observable<any> {
        return this.http.post(`${environment.server}/reply`, body);
    }
}
