import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from "@angular/core";
import {NgClass, NgFor, NgIf, NgStyle} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {ImagePathPipe} from "../../../../shared/pipe/image-path.pipe";

@Component({
    selector: "app-portfolio-slider",
    templateUrl: "slider.component.html",
    styleUrls: ["slider.component.scss"],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        NgClass,
        NgStyle,
        IconComponent,
        ImagePathPipe
    ]
})
export class SliderComponent implements OnInit {

    currentImageSize: number = 0;
    currentImage: number = 0;
    prevTransformX: number = 0;
    transformX: number = 0;
    grabbing: boolean = false;
    maxWrapperSize: number = 0;
    isDown: boolean = false;
    _start: number = 0;
    _move: number = 0;
    _end: number = 0
    _isClickable: boolean = true;
    speed: number = 50;
    threshold: number = 0;
    _interval: any;

    @Input() image: Array<any> = [];
    @ViewChild("sliderWrapper") sliderWrapper: ElementRef;
    @HostListener("window:resize") resize() {
        this.transformX = this.sliderWrapper.nativeElement.clientWidth * this.currentImage;
    }

    constructor() {}

    ngOnInit() {
        this.transformX = 0;
        this.currentImage = 0;
        console.log(this.image);
    }

    GetImageSize(size: number): void {
        this.currentImageSize = size;
        this.maxWrapperSize   = this.currentImageSize * (this.image.length - 1);
        this.threshold = this.currentImageSize * 0.1;
    }

    Start(e: any): void {
        clearInterval(this._interval);
        this.isDown = true;
        this._start = e.clientX;
    }

    Move(e: any): void {
        if(this.isDown){
            if(e.clientX > this._start) {
                this.transformX += e.clientX - this._move;
                if(this.transformX > this.currentImageSize * (this.image.length -1) )
                    this.transformX = this.currentImageSize * (this.image.length -1);
            }
            else {
                this.transformX += e.clientX - this._move;
                if(this.transformX < 0)
                    this.transformX = 0;
            }
        }
        this._move = e.clientX;
    }

    End(e: any): void {
        this.isDown = false;
        const offset = e.clientX - this._start;
        this.Animate(offset);
    }

    Leave(e: any): void {
        if(this.isDown){
            const offset = e.clientX - this._start;
            this.Animate(offset);
        }
        this.isDown = false;
    }


    BtnNextImage(): void {
        if(this.currentImage >= this.image.length - 1)
            return;

        clearInterval(this._interval);
        this.ShowNextImage((this.currentImage + 1) * this.currentImageSize);
    }

    BtnPrevImage(): void {
        if(this.currentImage <= 0)
            return;

        clearInterval(this._interval);
        this.ShowPrevImage((this.currentImage - 1) * this.currentImageSize);
    }

    Animate(offset: number): void {
        if(Math.abs(offset) > this.threshold){
            if(offset > 0) this.ShowNextImage((this.currentImage + 1) * this.currentImageSize);
            else this.ShowPrevImage((this.currentImage - 1) * this.currentImageSize);
        }
        else {
            if(offset > 0) this.BackToLeft();
            else this.BackToRight();
        }
    }

    ShowNextImage(target?: number): void {
        if(this.transformX >= this.maxWrapperSize)
            return;

        this.currentImage++;
        this.SetInterval(target!,false);
    }

    ShowPrevImage(target?: number): void {
        if(this.transformX <= 0)
            return;

        this.currentImage--;
        this.SetInterval(target!,true);
    }

    BackToLeft(): void {
        const target = this.currentImage * this.currentImageSize;
        this._interval = setInterval(() => {
            let distance = Math.abs(target - this.transformX);
            this.transformX -= (distance / this.currentImageSize) * this.speed;
            if(this.transformX <= target){
                this.transformX = target;
                clearInterval(this._interval);
            }
        }, 1);
    }

    BackToRight(): void {
        const target = this.currentImage * this.currentImageSize;
        this._interval = setInterval(() => {
            let distance = target - this.transformX;
            this.transformX += (distance / this.currentImageSize) * this.speed;
            if(this.transformX >= target){
                this.transformX = target;
                clearInterval(this._interval);
            }
        }, 1);
    }

    SetInterval(target: number, isLeft: boolean): void {
        this._interval = setInterval(() => {
            let distance = Math.abs(target - this.transformX);
            if(isLeft){
                this.transformX -= (distance / this.currentImageSize) * this.speed;
                if(parseInt(this.transformX.toFixed()) <= target) this.ClearInterval(target);
            }
            else {
                this.transformX += (distance / this.currentImageSize) * this.speed;
                if(parseInt(this.transformX.toFixed()) >= target) this.ClearInterval(target);
            }
        })
    }

    ClearInterval(target: number): void {
        this.transformX = target;
        clearInterval(this._interval);
    }
}
