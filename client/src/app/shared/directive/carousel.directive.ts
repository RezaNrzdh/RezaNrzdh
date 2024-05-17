import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive({
    selector: "[appCarousel]",
    standalone: true,
})
export class CarouselDirective implements OnInit {

    windowSize: number = 0;
    maxWrapperSize: number = 0;
    transformX: number = -16;
    isDown: boolean = false;
    _start: number = 0;
    _move: number = 0;

    @HostBinding("style.display") display: string;
    @HostBinding("style.overflow") overflow: string;
    @HostBinding("style.width") width: string;

    @HostListener("window:resize") resize() { this.GetWindowSize(); this.SetCardsSize(); }
    @HostListener("pointerdown", ['$event']) PointerDown(e: any) { this.OnStart(e) }
    @HostListener("pointermove", ['$event']) PointerMove(e: any) { this.OnMove(e) }
    @HostListener("pointerup", ['$event']) PointerUp(e: any) { this.OnEnd(e) }
    @HostListener("pointerleave", ['$event']) PointerLeave(e: any) { this.OnLeave(e) }

    constructor(private elemRef: ElementRef, private renderer: Renderer2) {
       this.GetWindowSize();
    }

    ngOnInit() {
        this.display = "flex";
        this.overflow = "hidden";
        this.width = `${this.windowSize}px`;
        this.renderer.setStyle(this.elemRef.nativeElement.firstChild, "touch-action", "none");
        this.renderer.setStyle(this.elemRef.nativeElement.firstChild, "-ms-touch-action", "none");
        this.renderer.setStyle(this.elemRef.nativeElement.firstChild, "transform", `translateX(${this.transformX}px)`);
        this.SetCardsSize();
    }

    SetCardsSize(): void {
        const width = this.windowSize * 0.7 + "px";
        setTimeout(() => {
            for(let i of this.elemRef.nativeElement.firstChild.children){
                this.renderer.setStyle(i, "width", width);
            }
        },10);
    }

    GetWindowSize(): void {
        this.windowSize = window.innerWidth;
        this.width = `${this.windowSize}px`;
    }

    OnStart(e: any): void {
        this.isDown = true;
        this._start = Math.round(e.clientX);
        this._move = this._start;
    }

    OnMove(e: any): void {
        if(this.isDown){
            if(e.clientX > this._start) {
                this.transformX += Math.round(e.clientX) - this._move;
            }
            else {
                this.transformX += Math.round(e.clientX) - this._move;
                if(this.transformX < -16){
                    this.transformX = -16;
                }
            }
        }
        this._move = Math.round(e.clientX);
        this.renderer.setStyle(this.elemRef.nativeElement.children[0], "transform", `translateX(${this.transformX}px)`);
    }

    OnEnd(e: any): void {
        this.isDown = false;
    }

    OnLeave(e: any): void {
        this.isDown = false;
    }
}
