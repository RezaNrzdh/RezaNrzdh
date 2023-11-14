import {Injectable} from "@angular/core";

@Injectable()
export class PortfolioService {

    data: any = [
        {
            title: "طراحی اپلیکیشن مدیریت کارمندان",
            visit: 10,
            like: 1,
            img: "",
            url: ""
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 2,
            img: "",
            url: ""
        },
        {
            title: "test 3",
            visit: 30,
            like: 3,
            img: "",
            url: ""
        },
        {
            title: "test 4",
            visit: 40,
            like: 4,
            img: "",
            url: ""
        }
    ];


    costructor () {}

    myPortfolio = (): any => {
        return this.data;
    }

}
