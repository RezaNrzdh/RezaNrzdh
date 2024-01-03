import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Injectable({providedIn: "root"})
export class CheckTokenService implements Resolve<any>{

    constructor(private authService: AuthService, private userService: UserService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.authService.Verify().subscribe({
            next: ((value: any) => {
                this.userService.ChangeInfo(value);
            })
        });
    }
}
