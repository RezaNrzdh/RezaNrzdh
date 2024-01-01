import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class CheckTokenService implements Resolve<any>{
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log(1);
    }
}
