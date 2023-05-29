import {Injectable} from "@angular/core";

@Injectable()
export class SkillsService {

    data: any = [
        {
            title: "Figma",
            level: 3,
            img: "assets/images/skill/figma-icon.svg"
        },
        {
            title: "Angular",
            level: 2,
            img: "assets/images/skill/angular-icon.svg"
        },
        {
            title: "Node Js",
            level: 2,
            img: "assets/images/skill/nodejs-icon.svg"
        },
        {
            title: "Photoshop",
            level: 3,
            img: "assets/images/skill/photoshop-icon.svg"
        },
        {
            title: "Illustrator",
            level: 3,
            img: "assets/images/skill/illustrator-icon.svg"
        },
        {
            title: "Blender",
            level: 2,
            img: "assets/images/skill/blender-icon.svg"
        },
        {
            title: "React Js",
            level: 2,
            img: "assets/images/skill/react-icon.svg"
        }
    ]

    constructor() {
    }

    getSkills = (): any => {
        return this.data;
    }
}
