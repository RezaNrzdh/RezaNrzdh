import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({ providedIn: "root" })
export class ResponsiveService {

    breakpoint = new BehaviorSubject<object>({});

    ChangeResolution(value: object) {
        this.breakpoint.next(value);
    }
}
