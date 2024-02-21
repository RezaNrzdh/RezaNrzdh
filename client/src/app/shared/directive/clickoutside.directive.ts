import {Directive, ElementRef, Input, Renderer2} from "@angular/core";

@Directive({
    selector: "[ClickOutside]"
})
export class ClickoutsideDirective {

    handler: any;

    constructor(private  renderer: Renderer2, private elemRef: ElementRef) {
        console.log("DIRECTIVE");
    }

}
