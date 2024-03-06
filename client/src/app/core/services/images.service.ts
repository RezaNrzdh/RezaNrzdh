import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class ImagesService {
    constructor(private http: HttpClient) {}

    GetAllImages(): Observable<any> {
        return this.http.get(`${environment.static}/public/read/files`)
    }
}
