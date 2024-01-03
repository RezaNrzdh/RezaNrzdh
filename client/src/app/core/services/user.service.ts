import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {

    userInfo = new Subject<object>();

    ChangeInfo(value: object) {
        this.userInfo.next(value);
    }
}
