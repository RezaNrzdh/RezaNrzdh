import {Injectable} from "@angular/core"

@Injectable()
export class OrdersService {

    data: any = [
        {
            title: "طراحی UIUX",
            icon: "uiux",
            options: [
                "سایت املاک",
                "سایت فروشگاهی",
                "سایت شخصی",
                "سایت محتوا و رسانه",
                "سایت شرکتی",
                "سایت آموزشی"
            ]
        },
        {
            title: "برنامه نویسی",
            icon: "webdev",
            options: [
                "سایت املاک",
                "سایت فروشگاهی",
                "سایت شخصی",
                "سایت محتوا و رسانه",
                "سایت شرکتی",
                "سایت آموزشی"
            ]
        },
        {
            title: "طراحی گرافیک",
            icon: "graphic",
            options: [
                "لوگو و برندبوک",
                "بنر تبلیغاتی سایت",
                "طراحی کاراکتر",
                "طراحی آیکون"
            ]
        },
        {
            title: "طراحی بازی",
            icon: "gamedev",
            options: [
                "طراحی کاراکتر بازی",
                "طراحی level design"
            ]
        }
    ];

    constructor() {}


    getOrders(): any {
        return this.data;
    }

}