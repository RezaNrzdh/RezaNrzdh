import {Injectable} from "@angular/core";

@Injectable()
export class SkillsService {

    data: any = [
        {
            title: "طراح وب و موبایل",
            img: "assets/images/skill/uiux.svg",
            desc: "به نرم افزارهای طراحی وب مانند Figma و Adobe XD و Balsamiq کاملا مسلط هستم و با مجموعه های زیادی در این حوزه همکاری می‌کنم.",
            level: "Senior"
        },
        {
            title: "توسعه دهنده وب",
            img: "assets/images/skill/webdev.svg",
            desc: "توانایی کار با زبان های برنامه نویسی مانند JavaScript و TypeScript و فریمورک هایی مانند Angular و NextJs و همچنین پلتفرم NodeJs رو دارم.",
            level: "Mid Level"
        },
        {
            title: "طراح گرافیست",
            img: "assets/images/skill/graphic.svg",
            desc: "به نرم افزارهای طراحی گرافیک 2 و 3 بعدی مانند Blender و Photoshop و Illustrator کاملا مسلط هستم و با مجموعه های زیادی در این حوزه همکاری می‌کنم.",
            level: "Expert"
        },
        {
            title: "توسعه دهنده بازی",
            img: "assets/images/skill/gamedev.svg",
            desc: "چون در این حوزه می‌تونم از توانایی گرافیکی و کد نویسیم بهره ببرم، با موتور بازیسازی Unreal Engine و زبان برنامه نویسی  ++C مشغول به توسعه بازی هستم.",
            level: "Junior"
        }
    ]

    constructor() {
    }

    getSkills = (): any => {
        return this.data;
    }
}
