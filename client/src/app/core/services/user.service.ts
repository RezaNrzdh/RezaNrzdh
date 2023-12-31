import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

    private userInfo: object;

    constructor() {}

    set SetUserInfo(value: any) {
        this.userInfo = value;
    }

    get GetUserInfo() {
        return this.userInfo;
    }
}
