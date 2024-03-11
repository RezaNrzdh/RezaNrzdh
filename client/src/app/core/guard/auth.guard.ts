import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    access: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const promise = new Promise((resolve, reject) => {
            this.authService.Verify().subscribe({
                next: ((value: any) => {
                    console.log(1);
                    resolve(value);
                }),
            });
        })

        return promise;
    }
}
