import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class PortfolioService {

    constructor (private http: HttpClient) {}

    GetAllPortfolio(query: any): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/limit`, { params: query });
    }

    GetTopPortfolio(cat: number): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/top/${cat}`)
    }

    GetPortfolio(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/${slug}`)
    }
}
