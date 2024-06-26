import {
    AfterViewInit, ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener,
    Input, OnChanges,
    OnInit,
    ViewChild
} from "@angular/core";
import {NgClass, NgFor, NgIf, NgStyle} from "@angular/common";
import {IconComponent} from "../../../../shared/component/icon/icon.component";
import {ImagePathPipe} from "../../../../shared/pipe/image-path.pipe";
import {HammerModule} from "@angular/platform-browser";

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
        ImagePathPipe,
        HammerModule
    ]
})
export class SliderComponent implements OnInit, AfterViewInit, OnChanges {

    currentImageSize: number = 0;
    currentImage: number = 0;
    prevTransformX: number = 0;
    maxWrapperSize: number = 0;
    transformX: number = 0;
    isDown: boolean = false;
    _start: number = 0;
    _move: number = 0;
    _offset: number = 0;
    speed: number = 50;
    threshold: number = 0;
    _interval: any;
    isMultiTouch: boolean = false;
    pointerEvent: string = "auto";

    @Input() image: Array<any> = [];
    @ViewChild("sliderWrapper") sliderWrapper: ElementRef;
    @ViewChild("anchorTag") anchorTag: ElementRef;
    @HostListener("window:resize") resize() {
        this.transformX = this.sliderWrapper.nativeElement.clientWidth * this.currentImage;
        this.currentImageSize = this.sliderWrapper.nativeElement.clientWidth;

    }
    constructor(private changeDetector: ChangeDetectorRef) {}

    ngOnInit() {
        this.transformX = 0;
        this.currentImage = 0;
    }

    ngAfterViewInit() {
        this.currentImageSize = this.sliderWrapper.nativeElement.clientWidth;
        this.changeDetector.detectChanges();
    }

    ngOnChanges(changes: any) {
        this.transformX = 0;
        this.currentImage = 0;
    }

    GetImageSize(size: number): void {
        this.currentImageSize = size;
        this.maxWrapperSize   = this.currentImageSize * (this.image.length - 1);
        this.threshold = this.currentImageSize * 0.1;
    }

    CheckIsMultiTouch(e: any): void {
        this.isMultiTouch = e.touches.length > 1;
        if(this.isMultiTouch){
            e.preventDefault();
            e.stopImmediatePropagation();
        }
    }

    Start(e: any): void {
        if(this.isMultiTouch)
            return;

        clearInterval(this._interval);
        this.isDown = true;
        this._start = Math.round(e.clientX);
        this._move = this._start;
    }

    Move(e: any): void {
        if(this.isDown){
            this.pointerEvent = "none";
            if(e.clientX > this._start) {
                this.transformX += Math.round(e.clientX) - this._move;
                if(this.transformX > this.currentImageSize * (this.image.length -1) )
                    this.transformX = this.currentImageSize * (this.image.length -1);
            }
            else {
                this.transformX += Math.round(e.clientX) - this._move;
                if(this.transformX < 0)
                    this.transformX = 0;
            }
        }
        this._move = Math.round(e.clientX);
    }

    End(e: any): void {
        if(this.isMultiTouch)
            return;

        this.isDown = false;
        let offset = Math.round(e.clientX) - this._start
        this.Animate(offset);
        this.pointerEvent = "auto";
    }

    Leave(e: any): void {
        if(this.isMultiTouch)
            return;

        if(this.isDown){
            const offset = Math.round(e.clientX) - this._start;
            this.Animate(offset);
        }
        this.isDown = false;
        this.pointerEvent = "auto";
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

    ShowNextImage(target: number): void {
        if(target > this.maxWrapperSize)
            return;

        this.currentImage++;
        this.SetInterval(target,false);
    }

    ShowPrevImage(target: number): void {
        if(target < 0)
            return;

        this.currentImage--;
        this.SetInterval(target,true);
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
