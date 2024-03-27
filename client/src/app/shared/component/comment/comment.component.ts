import {Component, Input, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarPipe } from "../../pipe/calendar.pipe";
import { ReplyComponent } from "../reply/reply.component";
import { ButtonComponent } from "../button/button.component";
import { TextboxComponent } from "../textbox/textbox.component";
import { NgIf, NgFor } from "@angular/common";
import { IconComponent } from "../icon/icon.component";
import {ReplyService} from "../../../core/services/reply.service";

@Component({
    selector: "app-comment",
    templateUrl: "comment.component.html",
    styleUrls: ["comment.component.scss"],
    standalone: true,
    imports: [IconComponent, NgIf, FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, NgFor, ReplyComponent, CalendarPipe]
})
export class CommentComponent implements OnInit {

    @Input() pid: number;
    @Input() data: any;

    isFormHide: boolean = true;
    isReplyHide: boolean = true;
    reply: Array<object> = [];

    commentForm: FormGroup | any;

    constructor(private replyService: ReplyService) {}

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
            isArticle: this.data.isArticle,
            replyId: this.data._id,
            replyName: this.data.name,
            ...this.commentForm.value
        }
        this.replyService.CreateReply(query).subscribe({
            next: ((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        });
    }

    ShowForm(): void {
        this.isFormHide = !this.isFormHide;
    }

    ShowReply(value: any): void {
        value.setAttribute("showreply", this.isReplyHide);
        this.isReplyHide = !this.isReplyHide;

        if(!this.isReplyHide ) {
            if(this.reply.length <= 0){
                const query = {
                    pid: this.pid,
                    replyId: this.data._id,
                    isArticle: this.data.isArticle
                }
                this.replyService.GetReplies(query).subscribe({
                    next:((value) => {
                        this.reply = value;
                    })
                });
            }
        }
    }
}
