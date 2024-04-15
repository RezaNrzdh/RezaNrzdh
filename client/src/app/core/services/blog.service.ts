import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class BlogService {

    constructor(private http: HttpClient){}

    // CRUD Portfolio
    GetAllArticles(query: any): Observable<any> {
        return this.http.get(`${environment.server}/blog`, { params: query });
    }
    GetArticle(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/blog/${slug}`);
    }
    CreateArticle(body: object): Observable<any> {
        return this.http.post(`${environment.server}/blog`, body);
    }
    ModifyArticle(body: object): Observable<any> {
        return this.http.patch(`${environment.server}/blog`, body);
    }

    // Admin Service
    GetAllArticlesForAdmin(query: any): Observable<any> {
        return this.http.get(`${environment.server}/blog/admin/find/all`, { params: query });
    }
    GetArticleForAdmin(slug: string): Observable<any> {
        return this.http.get(`${environment.server}/blog/admin/${slug}`);
    }
    GetArticleTitleForAdmin(query: any): Observable<any> {
        return this.http.get(`${environment.server}/blog/admin/find/title`,{ params: query });
    }

    // Comment & Replies
    CreateComment(body: any): Observable<any> {
        return this.http.post(`${environment.server}/blog/comment`, body);
    }
    CreateReply(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/blog/reply`, body);
    }
    ConfirmComments(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/blog/comment/confirm`, body);
    }
    ConfirmReplies(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/blog/reply/confirm`, body);
    }
    CreateLike(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/blog/like`, body);
    }
    CreateVisit(body: any): Observable<any> {
        return this.http.patch(`${environment.server}/blog/visit`, body);
    }


    // Images
    SaveImage(formData: any): Observable<any> {
        return this.http.post(`${environment.server}/blog/saveImg`, formData);
    }
    DeleteImage(image: string): Observable<any> {
        return this.http.delete(`${environment.static}/public/delete/${image}`);
    }
}
