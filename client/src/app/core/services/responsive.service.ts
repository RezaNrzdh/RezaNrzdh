import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({ providedIn: "root" })
export class ResponsiveService {

    breakpoint = new Subject<object>();

    ChangeResolution(value: object) {
        console.log(2);
        this.breakpoint.next(value);
    }
}
