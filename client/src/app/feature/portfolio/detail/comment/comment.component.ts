import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PortfolioService} from "../../../../core/services/portfolio.service";

@Component({
    selector: 'app-comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.scss']
})
export class CommentComponent implements OnInit {

    @Input() portfolioID: number;
    @Input() comment: any;
    isHide: boolean = true;
    replyIsHide: boolean = true;
    commentForm: FormGroup | any;

    constructor(private portfolioService: PortfolioService){}

    ngOnInit():void {
        this.commentForm = new FormGroup({
            "name": new FormControl(null, [Validators.required]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        });
    }

    OnSubmit(): void {
        if(this.commentForm.status === "INVALID") return;

        const query = {
            portfolioId: this.portfolioID,
            replyId: this.comment._id,
            replyName: this.comment.name,
            ...this.commentForm.value
        }
        this.portfolioService.CreateReply(query).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }

    ShowReplyForm(): void{
        this.isHide = !this.isHide;
    }

    ShowReplyComments(value: any): void{
        value.setAttribute("showreply", this.replyIsHide);
        this.replyIsHide = !this.replyIsHide;
    }
}
