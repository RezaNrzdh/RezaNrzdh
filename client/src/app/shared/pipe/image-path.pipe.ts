import {Pipe, PipeTransform} from "@angular/core";
import {environment} from "../../../environments/environment";

@Pipe({
    name: "ImagePath",
    standalone: true
})
export class ImagePathPipe implements PipeTransform {
    transform(value: any): any {
        return `${environment.static}/public/${value}`;
    }
}
