import {Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard  {

    access: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const promise = new Promise((resolve, reject) => {
            this.authService.Verify().subscribe({
                next: ((value: any) => {
                    resolve(value);
                }),
            });
        })

        return promise;
    }
}
