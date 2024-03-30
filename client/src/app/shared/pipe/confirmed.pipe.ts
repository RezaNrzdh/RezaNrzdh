import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "Confirmed",
    standalone: true
})
export class ConfirmedPipe implements PipeTransform {
    transform(value: any): any {
        if(value) return "تایید شده";
        else return "تایید نشده";
    }
}
