import {Injectable} from "@angular/core";

@Injectable()
export class ResponsiveService {

    private isXSmall: boolean;
    private isSmall: boolean;
    private isMedium: boolean;
    private isLarge: boolean;

    constructor() {}

    get getXSmall() {
        return this.isXSmall;
    }

    set setXSmall(value: any) {
        this.isXSmall = value;
    }

    get getSmall() {
        return this.isSmall;
    }

    set setSmall(value: any) {
        this.isSmall = value;
    }

    get getMedium() {
        return this.isMedium;
    }

    set setMedium(value: any) {
        this.isMedium = value;
    }

    get getLarge() {
        return this.isLarge;
    }

    set setLarge(value: any) {
        this.isLarge = value;
    }
}
