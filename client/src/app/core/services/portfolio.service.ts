import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
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

    GetPortfolioForAdmin(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/admin/${slug}`);
    }

    GetArticleTitleForAdmin(query: any): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/admin/find/title`,{ params: query });
    }

    CreatePortfolio(body: object): Observable<any> {
        return this.http.post(`${environment.server}/portfolio`, body);
    }

    ModifyPortfolio(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/portfolio`, body);
    }

    CreateComment(body: any): Observable<any> {
        return this.http.post(`${environment.server}/portfolio/comment`, body);
    }

    CreateReply(body: any): Observable<any> {
        return this.http.post(`${environment.server}/portfolio/reply`, body);
    }

    GetReplies(query: any): Observable<any> {
        return this.http.get(`${environment.server}/portfolio/reply`, { params: query});
    }

    DeleteImage(image: string): Observable<any> {
        return this.http.delete(`${environment.static}/public/delete/${image}`);
    }
}
