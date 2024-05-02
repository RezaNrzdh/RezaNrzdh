import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class MainService {

    constructor(private httpClient: HttpClient) {
    }

    GetRequest<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(url);
    }

    PostRequest<T,S>(url: string, obj: S): Observable<T> {
        return this.httpClient.post<T>(url, obj);
    }

    PatchRequest<T,S>(url: string, obj: S): Observable<T> {
        return this.httpClient.patch<T>(url, obj);
    }
}
