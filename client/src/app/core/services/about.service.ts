import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class AboutService {
    constructor(private http: HttpClient) {}

    // CRUD Portfolio
    GetAbout(): Observable<any> {
        return this.http.get(`${ environment.server }/about`);
    }
    GetPersonalInfo(): Observable<any> {
        return this.http.get(`${environment.server}/about/personalinfo`);
    }
    GetSkills(): Observable<any> {
        return this.http.get(`${environment.server}/about/skills`);
    }
    GetExperience(): Observable<any> {
        return this.http.get(`${environment.server}/about/experience`)
    }
    GetLanguages(): Observable<any> {
        return this.http.get(`${environment.server}/about/language`);
    }
    ModifyPersonalInfo(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/about/personalinfo`, body);
    }
}
