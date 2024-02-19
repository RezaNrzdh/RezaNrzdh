import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {BlogService} from "../../../core/services/blog.service";

@Component({
    selector: "app-comment",
    templateUrl: "comment.component.html",
    styleUrls: ["comment.component.scss"]
})
export class CommentComponent implements OnInit {

    @Input() pid: number;
    @Input() data: any;
    @Input() CreateReply: (query: object) => void;

    isFormHide: boolean = true;
    isReplyHide: boolean = true;

    commentForm: FormGroup | any;

    constructor(private portfolioService: PortfolioService, private blogService: BlogService) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            "name":    new FormControl(null, [Validators.required]),
            "email":   new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        })
    }

    OnSubmit(): void {
        if(this.commentForm.status === "INVALID") return;

        const query = {
            pid: this.pid,
            replyId: this.data._id,
            replyName: this.data.name,
            ...this.commentForm.value
        }
        this.CreateReply(query);
    }

    ShowForm(): void {
        this.isFormHide = !this.isFormHide;
    }

    ShowReply(value: any): void {
        value.setAttribute("showreply", this.isReplyHide);
        this.isReplyHide = !this.isReplyHide;
    }
}
