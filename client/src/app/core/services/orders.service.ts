import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({ providedIn: "root" })
export class OrdersService {

    constructor(private http: HttpClient) {}

    getOrders(): Observable<any> {
        return this.http.get(`${environment.server}/orders`);
    }
}
