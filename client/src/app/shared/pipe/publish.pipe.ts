import {Pipe, PipeTransform} from "@angular/core";
import {PublishConstant} from "../../core/constant/publish.constant";

@Pipe({
    name: "Publish"
})
export class PublishPipe implements PipeTransform {
    transform(value: any): any {
        return PublishConstant[value - 1];
    }
}
