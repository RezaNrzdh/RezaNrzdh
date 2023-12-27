import {Injectable} from "@nestjs/common";

@Injectable()
export class PortfolioService {

    data: any = [
        {
            title: "طراحی اپلیکیشن مدیریت کارمندان",
            visit: 10,
            like: 1,
            img: "/assets/images/posts/post1.jpg",
            url: "",
            category: "طراحی وب"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 2,
            img: "/assets/images/posts/post2.jpg",
            url: "",
            category: "توسعه وب"
        },
        {
            title: "test 3",
            visit: 30,
            like: 3,
            img: "/assets/images/posts/post3.jpg",
            url: "",
            category: "طراحی وب"
        },
        {
            title: "test 4",
            visit: 40,
            like: 4,
            img: "/assets/images/posts/post4.jpg",
            url: "",
            category: "طراحی وب"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 5,
            img: "/assets/images/posts/post1.jpg",
            url: "",
            category: "گرافیک"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 6,
            img: "/assets/images/posts/post2.jpg",
            url: "",
            category: "طراحی وب"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 7,
            img: "/assets/images/posts/post3.jpg",
            url: "",
            category: "گرافیک"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 8,
            img: "/assets/images/posts/post4.jpg",
            url: "",
            category: "توسعه وب"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 9,
            img: "/assets/images/posts/post1.jpg",
            url: "",
            category: "بازیسازی"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 10,
            img: "/assets/images/posts/post2.jpg",
            url: "",
            category: "بازیسازی"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 11,
            img: "/assets/images/posts/post3.jpg",
            url: "",
            category: "گرافیک"
        },
        {
            title: "طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome طراحی اپلیکیشن فضای مجازی Flavortome",
            visit: 20,
            like: 12,
            img: "/assets/images/posts/post4.jpg",
            url: "",
            category: "توسعه وب"
        }
    ];

    GetAllPortfolios(): Array<object> {
        return this.data;
    }

    GetTopPortfolios(value: number = 4): Array<object> {
        return this.data.slice(0, value);
    }
}