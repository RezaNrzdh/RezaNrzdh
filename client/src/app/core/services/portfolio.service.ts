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
        return this.http.get(`${environment.server}/portfolio/top/${cat}`);
    }

    GetPortfolio(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/${slug}`);
    }

    CreatePortfolio(body: object): Observable<any> {
        return this.http.post(`${environment.server}/portfolio`, body);
    }

    ModifyPortfolio(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/portfolio`, body);
    }

    CreateComment(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/portfolio/comment`, body);
    }

    CreateReply(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/portfolio/reply`, body);
    }

    SaveImage(formData: any): Observable<any> {
        return this.http.post(`${environment.server}/portfolio/saveImg`, formData);
    }

    DeleteImage(image: string): Observable<any> {
        return this.http.delete(`${environment.static}/public/delete/${image}`);
    }
}
