import {Component, OnInit} from "@angular/core";
import {CategoryConstant} from "../../../core/constant/category.constant";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PortfolioService} from "../../../core/services/portfolio.service";
import {environment} from "../../../../environments/environment"
import {ActivatedRoute} from "@angular/router";
import {PublishConstant} from "../../../core/constant/publish.constant";

@Component({
    selector: "admin-portfolio",
    templateUrl: "portfolio.component.html",
    styleUrls: ["portfolio.component.scss"]
})
export class PortfolioComponent implements OnInit {

    portfolioForm: FormGroup | any;
    option: Array<string> = [...CategoryConstant];
    publish: Array<string> = [...PublishConstant];
    images: Array<string> = [];
    thumbnail: string;

    env: string = environment.static;

    constructor(
        private portfolioService: PortfolioService,
        private activatedRoute: ActivatedRoute)
    {
        this.portfolioForm = new FormGroup({
            "title": new FormControl(null, [Validators.required]),
            "slug": new FormControl(null, [Validators.required]),
            "category": new FormControl(1, [Validators.required]),
            "publish": new FormControl(1, [Validators.required]),
            "desc": new FormControl(null, [Validators.required])
        });
    }

    ngOnInit() {
        if(this.activatedRoute.snapshot.params["slug"] !== "new"){
            this.portfolioService.GetPortfolioForAdmin(this.activatedRoute.snapshot.params["slug"]).subscribe({
                next: ((value: any) => {
                    this.portfolioForm.patchValue({
                        title: value.title,
                        slug: value.slug,
                        desc: value.desc,
                        category: value.category,
                        publish: value.publish
                    });
                    this.thumbnail = value.thumbnail;
                    this.images = [...this.images, ...value.img];
                })
            })
        }
    }

    OnSubmit(): void {
        if(this.portfolioForm.status === "INVALID") return;

        const query = {
            ...this.portfolioForm.value,
            img: this.images,
            thumbnail: this.thumbnail
        }
        if(this.activatedRoute.snapshot.params["slug"] == "new") this.OnCreateNewPortfolio(query);
        else this.OnModifyPortfolio(query);

    }

    OnCreateNewPortfolio(query: object): void {
        this.portfolioService.CreatePortfolio(query).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }

    OnModifyPortfolio(query: object): void {
        this.portfolioService.ModifyPortfolio(query).subscribe({
            next: ((value: any) => {
                console.log(value);
            })
        })
    }

    OnAddImages(value: any): void {
        this.images = [...this.images, value.filename];
    }

    OnDeleteImages(imageName: string): void {
        this.portfolioService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    const index = this.images.indexOf(imageName);
                    if(index > -1) this.images.splice(index,1);
                }
            })
        })
    }

    OnAddThumbnail(value: any): void {
        this.thumbnail = value.filename;
    }

    OnDeleteThumbnail(imageName: string): void {
        this.portfolioService.DeleteImage(imageName).subscribe({
            next: ((state: any) => {
                if(state){
                    this.thumbnail = "";
                }
            })
        })
    }
}
