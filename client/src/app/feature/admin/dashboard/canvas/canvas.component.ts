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
import {max} from "rxjs";

@Component({
    selector: "admin-canvas",
    templateUrl: "canvas.component.html",
    styleUrls: ["canvas.component.scss"],
    standalone: true,
    imports: []
})
export class CanvasComponent implements OnInit, AfterViewInit, OnChanges {

    data: Array<number> = [2,10,5,4,8,24,9];
    week: Array<string> = ['ش','ی','د','س','چ','پ','ج'];
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
        this.CreateLinerGraph();
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
        let index = 0;
        const row = Math.floor((this.height - 40.5) / 5);
        const startWidth = 40.5;
        const startHeight = Math.floor(this.height) - 30.5;
        const endWidth = this.width;
        const solid: any[] = [];
        const dashed = [2,3];
        const lineTick = 1;
        const fontSize = 12;
        const alignLeft = "right";

        const number = Math.ceil(Math.max(...this.data) / 5);

        for(let _row = startHeight; _row >= 0 ; _row -= Math.floor(row)) {
            if(_row == startHeight){
                this.CreateLine("white",startWidth,_row,endWidth,_row,lineTick, solid);
            }
            else {
                this.CreateLine("gray",startWidth,_row,endWidth,_row,lineTick, dashed);
            }
            this.CreateText((number * index).toString(), fontSize, this.font, "white", 30, _row, alignLeft);
            index++;
        }
    }

    CreateVertLines(): void {
        this.vLines = [];
        let index = 0;
        const col = this.width / 7;
        const startWidth = 40.5;
        const startHeight = 10.5;
        const endHeight = this.height - 30;
        const endWidth = this.width;
        const emptyDash: any[] = [];
        const dash = [2,3];
        const lineTick = 1;
        const fontSize = 12;
        const alignLeft = "center";

        for(let _col = startWidth; _col <= endWidth ; _col += Math.floor(col)){
            this.vLines = [...this.vLines, _col];
            const textmarginBot = endHeight + 28;

            if(_col == startWidth) {
                this.CreateLine("white",_col,startHeight,_col,endHeight,lineTick, emptyDash);
            }
            else {
                this.CreateLine("gray",_col,startHeight,_col,endHeight,lineTick, dash);
            }

            this.CreateText(this.week[index], fontSize, this.font, "white", _col, textmarginBot, alignLeft);
            index++;
        }
    }

    CreateLinerGraph(): void {

    }

}
