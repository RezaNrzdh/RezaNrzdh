import {Component, OnInit} from "@angular/core";
import {CommentService} from "../../../core/services/comment.service";
import {CalendarPipe} from "../../../shared/pipe/calendar.pipe";
import {RouterLink} from "@angular/router";
import {IconComponent} from "../../../shared/component/icon/icon.component";
import {TagComponent} from "../../../shared/component/tag/tag.component";
import {NgFor, NgIf} from "@angular/common";
import {ConfirmedPipe} from "../../../shared/pipe/confirmed.pipe";
import {IsArticlePipe} from "../../../shared/pipe/isarticle.pipe";
import {ReplyService} from "../../../core/services/reply.service";

@Component({
    selector: "admin-comment-list",
    templateUrl: "comment-list.component.html",
    styleUrls: ["comment-list.component.scss"],
    standalone: true,
    imports: [ CalendarPipe, RouterLink, IconComponent, TagComponent, NgFor, NgIf, ConfirmedPipe, IsArticlePipe ]
})
export class CommentListComponent implements OnInit {

    data: Array<any> = [];

    constructor(private commentService: CommentService, private replyService: ReplyService){}

    ngOnInit() {
        this.commentService.GetAllComments().subscribe({
            next:((value) => {
                this.data = value;
            })
        })
    }
}
