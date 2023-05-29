import {Injectable} from "@angular/core";

@Injectable()
export class PortfolioService {

    costructor () {}

    myPortfolio = (): any => {
        let data = [
            {
                title: "test 1",
                visit: 10,
                like: 1,
                img: "",
                url: ""
            },
            {
                title: "test 2",
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
            },
            {
                title: "test 5",
                visit: 50,
                like: 5,
                img: "",
                url: ""
            },
            {
                title: "test 6",
                visit: 60,
                like: 6,
                img: "",
                url: ""
            },
            {
                title: "test 7",
                visit: 70,
                like: 7,
                img: "",
                url: ""
            },
            {
                title: "test 8",
                visit: 80,
                like: 8,
                img: "",
                url: ""
            },
        ]

        return data;
    }

}
