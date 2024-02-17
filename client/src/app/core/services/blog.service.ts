import {Injectable} from "@angular/core";
import {Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class BlogService {

    constructor(private http: HttpClient){}

    GetAllArticles(query: any): Observable<any> {
        return this.http.get(`${environment.server}/blog`, { params: query });
    }

    GetArticle(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/blog/${slug}`);
    }

}
