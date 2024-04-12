import {Component, Input, OnInit} from "@angular/core";
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
        ImagePathPipe
    ]
})
export class SliderComponent implements OnInit {

    @Input() image: Array<any> = [];

    currentImageSize: number = 0;
    currentImage: number = 0;
    transformX: number = 0;

    transitionClass: boolean = false;
    start: number = 0;
    grabbing: boolean = false;
    offset: number = 0;

    constructor() {}

    ngOnInit() {
        this.transformX = 0;
        this.currentImage = 0;
    }

    GetImageSize(size: number): void {
        this.currentImageSize = size;
    }

    ShowNextImage(): void {
        if(this.currentImage >= this.image.length - 1) return;

        this.transitionClass = true;
        this.currentImage++;
        this.transformX += 100;
    }

    ShowPrevImage(): void {
        if(this.currentImage <= 0) return;

        this.transitionClass = true;
        this.currentImage--;
        this.transformX -= 100;
    }

    Start(e: any): void {
        this.grabbing = true;
        this.start = e.offsetX;
    }

    End(e: any): void {
        this.grabbing = false;
        if(this.start < e.clientX) this.ShowNextImage();
        else this.ShowPrevImage();
    }

    TouchStart(e: any): void {
        this.start = e.changedTouches[0].clientX;
    }

    TouchEnd(e: any): void {
        if(this.start < e.changedTouches[0].clientX) this.ShowNextImage();
        else this.ShowPrevImage();
    }
}
