import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class SkillsService {

    constructor(private http: HttpClient) {
    }

    getSkills = (): Observable<any> => {
        return this.http.get(`${environment.server}/skills`);
    }
}
