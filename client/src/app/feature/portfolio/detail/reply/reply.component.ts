import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PortfolioService} from "../../../../core/services/portfolio.service";

@Component({
    selector: "app-reply",
    templateUrl: "reply.component.html",
    styleUrls: ["reply.component.scss"]
})
export class ReplyComponent implements OnInit {

    @Input() portfolioID: number;
    @Input() CommentID: number;
    @Input() reply: any;
    replyForm: FormGroup | any;
    isHide: boolean = true;

    constructor(private portofolioService: PortfolioService){}

    ngOnInit(): void {
        this.replyForm = new FormGroup({
            "name": new FormControl(null, [Validators.required]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        })
    }

    OnSubmit(): void {
        if(this.replyForm.status === "INVALID") return;

        const query = {
            portfolioId: this.portfolioID,
            replyId: this.CommentID,
            replyName: this.reply.name,
            ...this.replyForm.value
        }
        this.portofolioService.CreateReply(query).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }

    ShowReplyForm(): void{
        this.isHide = !this.isHide;
    }
}
