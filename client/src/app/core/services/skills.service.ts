import {Injectable} from "@angular/core";

@Injectable()
export class SkillsService {

    data: any = [
        {
            title: "Figma",
            img: "assets/images/skill/figma-icon.svg"
        },
        {
            title: "Angular",
            img: "assets/images/skill/angular-icon.svg"
        },
        {
            title: "Node Js",
            img: "assets/images/skill/node-icon.svg"
        },
        {
            title: "Photoshop",
            img: "assets/images/skill/photoshop-icon.svg"
        },
        {
            title: "Blender",
            img: "assets/images/skill/blender-icon.svg"
        },
        {
            title: "unreal",
            img: "assets/images/skill/unreal-icon.svg"
        }
    ]

    constructor() {
    }

    getSkills = (): any => {
        return this.data;
    }
}
