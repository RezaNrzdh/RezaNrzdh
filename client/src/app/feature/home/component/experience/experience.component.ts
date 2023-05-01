import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app--home-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    experience = [
        {
            title: "طراح وب و موبایل",
            years: "6",
            img: "assets/images/uiux.png",
            desc: "تسلط کامل به نرم افزارهای Figma و Adobe XD و توانایی اجرای تمامی طرح های ترند وب و موبایل"
        },
        {
            title: "توسعه دهنده front-end",
            years: "3",
            img: "assets/images/frontend.png",
            desc: "توانایی کار با Javascriopt و React و Angular و NextJs برای پیاده سازی اپلیکیشن های تحت وب"
        },
        {
            title: "توسعه دهنده back-end",
            years: "3",
            img: "assets/images/backend.png",
            desc: "توانایی کار با NodeJs و ExpressJs و MongoDB برای ساخت بخش سرور اپلیکیشن ها"
        },
        {
            title: "گرافیست",
            years: "10",
            img: "assets/images/graphic.png",
            desc: "تسلط کامل به نرم افزار های گرافیکی Photoshop و Illustrator برای طراحی المان های گرافیکی پیکسلی و برداری"
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
