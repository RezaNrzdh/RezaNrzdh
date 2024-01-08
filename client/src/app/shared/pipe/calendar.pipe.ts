import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "PersianCalendar"
})
export class CalendarPipe implements PipeTransform {

    dateOption: Object = { year: 'numeric', month: 'short', day: 'numeric' };
    timeOption: Object = { hour: '2-digit', minute: '2-digit', hour12: false };

    transform(value: any): any {
        const date = new Date(value).toLocaleDateString("fa-IR", this.dateOption);
        const time = new Date(value).toLocaleDateString([], this.timeOption);
        return date;
    }
}
