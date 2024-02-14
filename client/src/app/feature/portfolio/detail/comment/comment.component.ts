import {Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() comment: any;

    isHide: boolean = true;
    replyIsHide: boolean = true;

    constructor(){}

    ngOnInit():void {}

    ShowReplyForm(): void{
        this.isHide = !this.isHide;
    }

    ShowReplyComments(value: any): void{
        value.setAttribute("showreply", this.replyIsHide);
        this.replyIsHide = !this.replyIsHide;
    }
}
