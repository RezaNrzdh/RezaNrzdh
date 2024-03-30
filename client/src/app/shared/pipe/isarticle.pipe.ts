import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "IsArticle",
    standalone: true
})
export class IsArticlePipe implements PipeTransform {
    transform(value: any): any {
        if(value) return "مقاله";
        else return "نمونه کار"
    }
}
