import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class PortfolioService {

    constructor (private http: HttpClient) {}

    GetAllPortfolio(lt: number, limit: number): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/limit`, { params: { lt: lt, limit: limit }});
    }

    GetTopPortfolio(value: number = 4): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/top/${value}`)
    }

    GetPortfolio(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/${slug}`)
    }

    GetPortfolioByCategory(value: number): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/category/${value}`);
    }
}
