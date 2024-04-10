import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from "@angular/core";
import {NgClass, NgFor, NgStyle} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {ImagePathPipe} from "../../../../shared/pipe/image-path.pipe";

@Component({
    selector: "app-portfolio-slider",
    templateUrl: "slider.component.html",
    styleUrls: ["slider.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NgStyle,
        IconComponent,
        ImagePathPipe,
    ]
})
export class SliderComponent implements OnInit {

    @Input() image: Array<any> = [];
    @ViewChild("sliderWrapper") sliderWrapper: ElementRef;

    currentImageSize: number = 0;
    currentImage: number = 0;
    transformX: number = 0;

    sliderClass: boolean = false;
    start: number = 0;
    offset: number = 0;

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        this.transformX = 0;
        this.currentImage = 0;
    }

    GetImageSize(size: number): void {
        this.currentImageSize = size;
    }

    ShowNextImage(): void {
        if(this.currentImage >= this.image.length - 1) return;

        this.sliderClass = true;
        this.currentImage++;
        this.transformX += this.currentImageSize;
    }

    ShowPrevImage(): void {
        if(this.currentImage <= 0) return;

        this.sliderClass = true;
        this.currentImage--;
        this.transformX -= this.currentImageSize;
    }

    Start(e: any): void {
        console.log(e.clientX);
        this.start = e.offsetX;
    }

    Over(e: any): void {
        this.sliderClass = false;
        this.offset = e.offsetX - this.start;

        if(this.transformX < 0) {
            this.transformX = 0;
        }

        if(e.clientX - this.start < (this.currentImageSize / 2)){
            this.transformX += this.offset;
        }
        else {
        }

        if(this.transformX > this.currentImageSize * 2) {
            this.transformX = this.currentImageSize * 2;
        }
    }

    End(e: any): void {
        console.log(e.clientX);
    }
}
