import {Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import {ResponsiveService} from "../services/responsive.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {ResponsiveEnum} from "../enum/responsive.enum";

@Injectable({ providedIn: "root" })
export class CheckBreakpointService  {

    constructor(private responsiveService: ResponsiveService , private breakpointObserver: BreakpointObserver) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        let responsiveArray = [ResponsiveEnum.XSMALL, ResponsiveEnum.SMALL, ResponsiveEnum.MEDIUM, ResponsiveEnum.LARGE];
        this.breakpointObserver.observe(responsiveArray).subscribe((value) => {
            this.responsiveService.ChangeResolution(value.breakpoints);
        });
    }
}
