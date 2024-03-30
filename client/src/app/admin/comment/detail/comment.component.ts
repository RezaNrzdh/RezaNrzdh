import {Component, OnInit} from "@angular/core";
import {DropdownComponent} from "../../../shared/component/dropdown/dropdown.component";
import {CommentService} from "../../../core/services/comment.service";
import {ReplyService} from "../../../core/services/reply.service";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {TagComponent} from "../../../shared/component/tag/tag.component";
import {IsArticlePipe} from "../../../shared/pipe/isarticle.pipe";
import {ButtonComponent} from "../../../shared/component/button/button.component";
import {BlogService} from "../../../core/services/blog.service";
import {IconComponent} from "../../../shared/component/icon/icon.component";
import {NgFor, NgIf} from "@angular/common";
import {ConfirmedPipe} from "../../../shared/pipe/confirmed.pipe";
import {CalendarPipe} from "../../../shared/pipe/calendar.pipe";

@Component({
    selector: "admin-comment",
    templateUrl: "comment.component.html",
    styleUrls: ["comment.component.scss"],
    standalone: true,
    imports: [DropdownComponent, TagComponent, IsArticlePipe, ButtonComponent, IconComponent, NgIf, NgFor, ConfirmedPipe, CalendarPipe]
})
export class CommentComponent implements OnInit {

    comment: any = {};
    data: any = {};

    constructor(
        private commentService: CommentService,
        private portfolioService: PortfolioService,
        private blogService: BlogService,
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit() {
        const query = { slug: this.activatedRoute.snapshot.params["slug"] }
        this.commentService.GetOneComment(query).subscribe({
            next:((value) => {
                this.comment = value;
                this.OnGetData(value.pid, value.isArticle);
            })
        });
    }

    OnGetData(id: any, isArticle: boolean): any {
        const query = { id: id, isArticle: isArticle}
        if(isArticle){
            this.blogService.GetArticleTitleForAdmin(query).subscribe({
                next:((value: any) => {
                    this.data = value;
                })
            });
        }
        else{
            this.portfolioService.GetArticleTitleForAdmin(query).subscribe({
                next:((value: any) => {
                    this.data = value;
                })
            });
        }
    }

    // OnGetReplies(id: any, pid: number, isArticle: boolean): any {
    //     const query = { pid: pid, replyId: id, isArticle: isArticle };
    //     this.replyService.GetRepliesForAdmin(query).subscribe({
    //         next: ((value) => {
    //             this.replies = value;
    //         })
    //     })
    // }
}
