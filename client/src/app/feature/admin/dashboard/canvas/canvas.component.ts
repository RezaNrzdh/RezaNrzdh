import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostListener, OnChanges,
    OnInit,
    Renderer2,
    ViewChild
} from "@angular/core";

@Component({
    selector: "admin-canvas",
    templateUrl: "canvas.component.html",
    styleUrls: ["canvas.component.scss"],
    standalone: true,
    imports: []
})
export class CanvasComponent implements OnInit, AfterViewInit, OnChanges {

    data: Array<number> = [10,20,40,60,70,100,50];
    week: Array<string> = ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'];
    width: number;
    height: number;
    ctx: any;
    font: string = "tahoma";
    hLines: Array<number> = [];
    vLines: Array<number> = [];

    @ViewChild("convasWrapper") canvasWrapper: ElementRef;
    @ViewChild("myCanvas") myCanvas: ElementRef;
    @HostListener("window:resize") resize() {
        this.SetWidthHeight();
        this.InitCanvas();
    }

    constructor(private renderer: Renderer2,private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        setTimeout(() => {
            this.ngAfterViewInit();
        },10);
    }

    ngAfterViewInit() {
        this.ctx = this.myCanvas.nativeElement.getContext("2d");
        this.SetWidthHeight();
        this.InitCanvas();
    }

    ngOnChanges(changes: any) {
        this.SetWidthHeight();
        this.InitCanvas();
    }

    SetWidthHeight(): void {
        this.ctx.canvas.width = 0;
        this.ctx.canvas.height = 0;
        this.width = this.canvasWrapper.nativeElement.clientWidth;
        this.height = this.canvasWrapper.nativeElement.clientHeight;
        // babate error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
        this.cdr.detectChanges();

        this.ctx.canvas.width  = this.width;
        this.ctx.canvas.height = this.height;
    }

    InitCanvas(): void {
        this.CreateHorizLines();
        this.CreateVertLines();
        this.CreateBarGraph();
    }

    CreateLine(style: string, startWidth: number, startHeight: number, endWidth: number, endHeight: number, line?: number, dash: Array<number> = []): void {
        this.ctx.strokeStyle = style;
        this.ctx.beginPath();
        this.ctx.setLineDash(dash);
        this.ctx.moveTo(startWidth, startHeight);
        this.ctx.lineTo(endWidth, endHeight);
        this.ctx.lineWidth = line;
        this.ctx.stroke();
    }

    CreateText(text: string, size: number, font: string, color: string, width: number, height: number, align: string): void {
        this.ctx.textAlign = align;
        this.ctx.fillStyle = color;
        this.ctx.font = `${size}px ${font}`;
        this.ctx.fillText(text, width, height);
    }

    CreateHorizLines(): void {
        this.hLines = [];
        const maxRow = 5;
        const startWidth = 40.5;
        const endWidth = this.width;
        const startHeight = 0.5;
        const endHeight = this.height - 30.5;
        const row = (this.height - 30) / maxRow;
        const solid: any[] = [];
        const dashed = [2,3];
        const lineTick = 1;
        const fontSize = 12;
        const alignRight = "right";

        const number = Math.ceil(Math.max(...this.data) / 5);

        for(let i= 0; i <= maxRow; i++){
            if(i == 0){
                this.CreateLine("gray",startWidth,startHeight,endWidth,startHeight,lineTick, dashed);
                this.CreateText("0", fontSize, this.font, "white", startWidth - 8, endHeight, alignRight);
            }
            else if (i == maxRow) {
                this.CreateLine("white",startWidth,endHeight,endWidth,endHeight,lineTick, solid);
                this.CreateText((number * maxRow).toString(), fontSize, this.font, "white", startWidth - 8, startHeight + 8, alignRight);
            }
            else {
                const h = Math.floor(row * i) + 0.5;
                this.CreateLine("gray",startWidth,h,endWidth,h,lineTick, dashed);
                this.CreateText((number * (maxRow - i)).toString(), fontSize, this.font, "white", startWidth - 8, h, alignRight);
            }
        }
    }

    CreateVertLines(): void {
        this.vLines = [];
        const maxCol = 8;
        const startHeight = 0.5;
        const startWidth = 40.5;
        const endWidth = this.width - 0.5;
        const endHeight = this.height - 30;
        const col = (this.width - 40) / maxCol;
        const solid: any[] = [];
        const dashed = [2,3];
        const lineTick = 1;
        const fontSize = 12;
        const alignLeft = "center";

        for(let i= 0; i <= maxCol; i++){
            if(i == 0){
                this.CreateLine("white",startWidth,startHeight,startWidth,endHeight,lineTick, solid);
            }
            else if( i == maxCol){
                this.CreateLine("gray",endWidth,startHeight,endWidth,endHeight,lineTick, dashed);
            }
            else {
                const w = Math.floor(startWidth + (col * i)) - 0.5;
                this.CreateLine("gray",w,startHeight,w,endHeight,lineTick, dashed);
                this.CreateText(this.week[i-1], fontSize, this.font, "white", w, this.height-3, alignLeft);
            }
        }
    }

    CreateBarGraph(): void {
        const maxCol = 8;
        const startWidth = 40.5;
        const endHeight = this.height - 30;
        const col = (this.width - 40) / maxCol;
        const solid: any[] = [];
        const lineTick = 24;

        const number = Math.ceil(Math.max(...this.data) / 5) * 5;
        const percent = endHeight / number;
        const result = this.data.map((value) => {
            return (endHeight - (value * percent));
        })

        for(let i= 1; i < maxCol; i++){
            const w = Math.floor(startWidth + (col * i)) - 0.5;
            this.CreateLine("#2BB2FF",w,result[i-1],w,endHeight-1,lineTick, solid);
        }
    }

}
