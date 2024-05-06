import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class ImagesService {
    constructor(private http: HttpClient) {}

    SaveImage(formData: any): Observable<any> {
        return this.http.post(`${environment.server}/saveImg`, formData);
    }

    SaveImage2(formData: any): Observable<any> {
        return this.http.post(`${environment.server}/saveImg2`, formData);
    }


    GetAllImages(): Observable<any> {
        return this.http.get(`${environment.static}/public/read/files`)
    }

    DeleteImage(image: string): Observable<any> {
        return this.http.delete(`${environment.static}/public/delete/${image}`);
    }
}
