import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MainService} from "./main.service";

@Injectable({ providedIn: "root" })
export class AboutService {
    constructor(private http: HttpClient, private mainService: MainService) {}

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
    GetSkillOne(id: number): Observable<any> {
        return this.http.get(`${environment.server}/about/skills/${id}`);
    }
    ModifySkills(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/about/skills`, body);
    }

    // Experience
    GetExperience(): Observable<any> {
        return this.http.get(`${environment.server}/about/experience`);
    }
    GetExperienceOne(id: number): Observable<any> {
        return this.http.get(`${environment.server}/about/experience/${id}`);
    }
    ModifyExperience(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/about/experience`,body);
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
