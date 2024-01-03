import {Injectable} from "@angular/core";
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {ResponsiveService} from "../services/responsive.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ResponsiveEnum} from "../enum/responsive.enum";

@Injectable({ providedIn: "root"})
export class CheckBreakpointService implements Resolve<any> {

    constructor(private responsiveService: ResponsiveService, private breakpointObserver: BreakpointObserver) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let responsiveArray = [ResponsiveEnum.XSMALL, ResponsiveEnum.SMALL, ResponsiveEnum.MEDIUM, ResponsiveEnum.LARGE];
        this.breakpointObserver.observe(responsiveArray).subscribe({
            next: ((value: any) => {
                console.log(1);
                this.responsiveService.ChangeResolution(value.breakpoints);
            })
        });
    }
}
