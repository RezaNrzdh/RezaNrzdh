import {Pipe, PipeTransform} from "@angular/core";
import {CategoryConstant} from "../../core/constant/category.constant";

@Pipe({
    name: "CategoryPipe",
    standalone: true
})
export class CategoryPipe implements PipeTransform {
    transform(value: any): any {
        return CategoryConstant[value - 1];
    }
}
