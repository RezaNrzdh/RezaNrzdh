import {Injectable} from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
} from "@angular/common/http";
import {Observable, tap} from "rxjs";


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            withCredentials: true,
            setHeaders: {
                test: `bearer${document.cookie}`
            }
        })
        return next.handle(req);
    }
}
