import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class PortfolioService {

    constructor (private http: HttpClient) {}

    GetAllPortfolio(): Observable<any> {
        return this.http.get(`${environment.server}/portfolio`);
    }

    GetTopPortfolio(value: number = 4): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/top/${value}`)
    }

}
