import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class AboutService {
    constructor(private http: HttpClient) {}

    GetAbout(): Observable<any> {
        return this.http.get(`${ environment.server }/about`);
    }

    GetSkills(): Observable<any> {
        return this.http.get(`${environment.server}/about/skills`);
    }

    GetExperience(): Observable<any> {
        return this.http.get(`${environment.server}/about/experience`)
    }

}
