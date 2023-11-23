import {Injectable} from "@angular/core"

@Injectable()
export class OrdersService {

    data: any = [
        {
            title: "طراحی UIUX",
            icon: "uiux",
            options: [
                {
                    title: "سایت املاک",
                    desc: ""
                },
                {
                    title: "سایت فروشگاهی",
                    desc: ""
                },
                {
                    title: "سایت شخصی",
                    desc: ""
                },
                {
                    title: "سایت محتوا و رسانه",
                    desc: "در این گونه سایت ها مطالب عمومی، علمی، تخصصی، فیلم و سریال و ...، در قالب مقاله و خبر به کاربران ارائه میشود. از نمونه سایت های مشابه موجود در جهان میتونیم به medium.com و theverge.com و digitaltrends.com و در ایران هم به zoomg.ir و zoomit.ir و vigiato.net اشاره کنیم."
                },
                {
                    title: "سایت شرکتی",
                    desc: ""
                },
                {
                    title: "سایت آموزشی",
                    desc: ""
                }
            ]
        },
        {
            title: "برنامه نویسی",
            icon: "webdev",
            options: [
                {
                    title: "سایت املاک",
                    desc: ""
                },
                {
                    title: "سایت فروشگاهی",
                    desc: ""
                },
                {
                    title: "سایت شخصی",
                    desc: ""
                },
                {
                    title: "سایت محتوا و رسانه",
                    desc: "در این گونه سایت ها مطالب عمومی، علمی، تخصصی، فیلم و سریال و ...، در قالب مقاله و خبر به کاربران ارائه میشود. از نمونه سایت های مشابه موجود در جهان میتونیم به medium.com و theverge.com و digitaltrends.com و در ایران هم به zoomg.ir و zoomit.ir و vigiato.net اشاره کنیم."
                },
                {
                    title: "سایت شرکتی",
                    desc: ""
                },
                {
                    title: "سایت آموزشی",
                    desc: ""
                }
            ]
        },
        {
            title: "طراحی گرافیک",
            icon: "graphic",
            options: [
                {
                    title: "لوگو و برندبوک",
                    desc: ""
                },
                {
                    title: "بنر تبلیغاتی سایت",
                    desc: ""
                },
                {
                    title: "طراحی کاراکتر",
                    desc: ""
                },
                {
                    title: "طراحی آیکون",
                    desc: ""
                }
            ]
        },
        {
            title: "طراحی بازی",
            icon: "gamedev",
            options: [
                {
                    title: "طراحی کاراکتر بازی",
                    desc: ""
                },
                {
                    title: "طراحی level design",
                    desc: ""
                }
            ]
        }
    ];

    constructor() {}


    getOrders(): any {
        return this.data;
    }

}