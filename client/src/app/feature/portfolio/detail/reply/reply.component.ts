import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-reply",
    templateUrl: "reply.component.html",
    styleUrls: ["reply.component.scss"]
})
export class ReplyComponent implements OnInit {

    isHide: boolean = true;

    constructor(){}

    ngOnInit(): void {

    }

    ShowReplyForm(): void{
        this.isHide = !this.isHide;
    }
}
