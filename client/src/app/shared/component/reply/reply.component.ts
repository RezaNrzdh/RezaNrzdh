import {Component, Input, OnInit} from "@angular/core";
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CalendarPipe } from "../../pipe/calendar.pipe";
import { ButtonComponent } from "../button/button.component";
import { TextboxComponent } from "../textbox/textbox.component";
import { NgIf } from "@angular/common";
import { IconComponent } from "../icon/icon.component";
import {ReplyService} from "../../../core/services/reply.service";

@Component({
    selector: "app-reply",
    templateUrl: "reply.component.html",
    styleUrls: ["reply.component.scss"],
    standalone: true,
    imports: [IconComponent, NgIf, FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, CalendarPipe]
})
export class ReplyComponent implements OnInit {

    @Input() pid: number;
    @Input() commentId: number;
    @Input() data: any;

    isHideForm: boolean = true;

    commentForm: FormGroup | any;


    constructor(private replyService: ReplyService) {}

    ngOnInit() {
        console.log(['reply',this.data]);
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
            isArticle: this.data.isArticle,
            replyId: this.commentId,
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
        this.isHideForm = !this.isHideForm;
    }
}
