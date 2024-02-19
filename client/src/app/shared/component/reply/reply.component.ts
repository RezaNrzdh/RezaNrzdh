import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {BlogService} from "../../../core/services/blog.service";

@Component({
    selector: "app-reply",
    templateUrl: "reply.component.html",
    styleUrls: ["reply.component.scss"]
})
export class ReplyComponent implements OnInit {

    @Input() pid: number;
    @Input() commentId: number;
    @Input() data: any;
    @Input() CreateReply: (query: object) => void;

    isHideForm: boolean = true;

    commentForm: FormGroup | any;


    constructor(private portfolioService: PortfolioService, private blogService: BlogService) {}

    ngOnInit() {
        this.commentForm = new FormGroup({
            "name":    new FormControl(null, [Validators.required]),
            "email":   new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        });
    }

    OnSubmit(): void {
        if(this.commentForm.status === "INVALID") return;

        const query = {
            pid: this.pid,
            replyId: this.commentId,
            replyName: this.data.name,
            ...this.commentForm.value
        }
        this.CreateReply(query);
    }

    ShowForm(): void {
        this.isHideForm = !this.isHideForm;
    }
}
