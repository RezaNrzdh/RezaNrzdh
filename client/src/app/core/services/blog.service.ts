import {Injectable} from "@angular/core";

@Injectable()
export class BlogService {

    data: any = [
        {
            title: ""

        }
    ]

    constructor(){}

    GetBlogList(): any {
        return this.data;
    }

}
