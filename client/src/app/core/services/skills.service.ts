import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class SkillsService {

    constructor(private http: HttpClient) {
    }

    getSkills(): Observable<any> {
        return this.http.get(`${environment.server}/skills`);
    }

    getSkillOne(id: number): Observable<any> {
        return this.http.get(`${environment.server}/skills/${id}`);
    }

    ModifySkill(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/skills`,body);
    }
}
