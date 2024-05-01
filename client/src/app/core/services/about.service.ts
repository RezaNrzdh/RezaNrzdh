import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class AboutService {
    constructor(private http: HttpClient) {}

    // About
    GetAbout(): Observable<any> {
        return this.http.get(`${ environment.server }/about`);
    }

    // Personal Info
    GetPersonalInfo(): Observable<any> {
        return this.http.get(`${environment.server}/about/personalinfo`);
    }
    ModifyPersonalInfo(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/about/personalinfo`, body);
    }

    // Skills
    GetSkills(): Observable<any> {
        return this.http.get(`${environment.server}/about/skills`);
    }

    // Experience
    GetExperience(): Observable<any> {
        return this.http.get(`${environment.server}/about/experience`)
    }

    // Languages
    GetLanguages(): Observable<any> {
        return this.http.get(`${environment.server}/about/language`);
    }
    GetLanguagesOne(id: number): Observable<any> {
        return this.http.get(`${environment.server}/about/language/${id}`);
    }
    ModifyLanguageOne(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/about/language`, body);
    }
}
