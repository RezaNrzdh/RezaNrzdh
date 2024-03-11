import {Component, ElementRef, OnInit, Renderer2, ViewChild} from "@angular/core";
import {PortfolioService} from "../../../core/services/portfolio.service";
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {PortfolioModel} from "../../../core/models/portfolio.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ResponsiveService} from "../../../core/services/responsive.service";
import {Subscription} from "rxjs";
import {ResponsiveEnum} from "../../../core/enum/responsive.enum";
import {environment} from "../../../../environments/environment";
import { CategoryPipe } from "../../../shared/pipe/category.pipe";
import { CalendarPipe } from "../../../shared/pipe/calendar.pipe";
import { CommentComponent } from "../../../shared/component/comment/comment.component";
import { ButtonComponent } from "../../../shared/component/button/button.component";
import { TextboxComponent } from "../../../shared/component/textbox/textbox.component";
import { PortfolioCardComponent } from "../../../shared/component/portfolioCard/portfolio-card.component";
import { IconComponent } from "../../../shared/component/icon/icon.component";
import { TagComponent } from "../../../shared/component/tag/tag.component";
import { NgIf, NgFor, NgClass } from "@angular/common";

@Component({
    selector: "app-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"],
    standalone: true,
    imports: [NgIf, TagComponent, IconComponent, NgFor, NgClass, PortfolioCardComponent, FormsModule, ReactiveFormsModule, TextboxComponent, ButtonComponent, CommentComponent, CalendarPipe, CategoryPipe]
})
export class PortfolioComponent implements OnInit {

    data: PortfolioModel = new PortfolioModel();
    topPortfolio: Array<PortfolioModel>;
    commentForm: FormGroup | any;
    isMedium: boolean = false;
    isSmall: boolean = false;
    env: string = environment.static;
    sub: Subscription;

    currentImage: number = 0;
    transformX: number = 0;
    @ViewChild('sliderWrapper') sliderWrapper: ElementRef;

    constructor(
        private portfolioService: PortfolioService,
        private responsiveService: ResponsiveService,
        private renderer: Renderer2,
        private route: Router,
        private activatedRoute: ActivatedRoute)
    {
        this.sub = responsiveService.breakpoint.subscribe({
            next: ((value: any) => {
                value[ResponsiveEnum.MEDIUM] ? this.isMedium = true : this.isMedium = false;
                value[ResponsiveEnum.SMALL] ? this.isSmall = true : this.isSmall = false;
            })
        });
    }

    ngOnInit() {
        this.OnGetPortfolio();
        this.commentForm = new FormGroup({
            "name": new FormControl(null, [Validators.required]),
            "email": new FormControl(null, [Validators.required, Validators.email]),
            "comment": new FormControl(null, [Validators.required])
        });
    }

    OnGetPortfolio(): void{
        this.activatedRoute.params.subscribe({
            next: ((value: any) => {
                this.transformX = 0;
                this.currentImage = 0;
                this.portfolioService.GetPortfolio(value.slug).subscribe({
                    next: ((value: any) => {
                        this.data = value;
                        this.data = value;
                        this.renderer.setStyle(this.sliderWrapper.nativeElement,'transform', 'translate3d(0,0,0)');
                        this.OnGetTopPortfolio(this.data.category);
                    })
                });
            })
        });
    }

    OnGetTopPortfolio(value: number): void{
        this.portfolioService.GetTopPortfolio(value).subscribe({
            next: ((value: any) => {
                this.topPortfolio = value;
            })
        });
    }

    OnSubmit(): void {
        if(this.commentForm.status === "INVALID") return;

        const query = {
            pid: this.data._id,
            body: this.commentForm.value
        }
        this.portfolioService.CreateComment(query).subscribe({
            next:((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        })
    }

    OnCreateReply(body: any): void {
        this.portfolioService.CreateReply(body).subscribe({
            next: ((value: any) => {
                this.commentForm.markAsPristine();
                this.commentForm.markAsUntouched();
                this.commentForm.reset({ name: "", email: "", comment: "" });
            })
        });
    }

    ShowNextImage(value: any): void {
        if(this.currentImage >= this.data.img.length - 1) return;
        this.transformX += 100;
        this.renderer.setStyle(value,'transform',`translate3d(${ this.transformX }%,0,0)`);
        this.currentImage++;
    }

    ShowPrevImage(value: any): void {
        if(this.currentImage <= 0) return;
        this.transformX -= 100;
        this.renderer.setStyle(value,'transform',`translate3d(${ this.transformX }%,0,0)`);
        this.currentImage--;
    }

}
