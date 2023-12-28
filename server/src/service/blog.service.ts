import {Injectable} from "@nestjs/common";

@Injectable()
export class BlogService {

    GetAllArticles(): Array<object> {
        return this.data;
    }

    GetRecentArticles(): Array<object> {
        return [{title: 'Recent Articles'}];
    }

    GetOtherArticles(): Array<object> {
        return [{title: 'Other Articles'}];
    }

    GetArticle(): object {
        return {title: 'One Article'};
    }

    data: any = [
        {
            id: 1,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: "test"
        },
        {
            id: 2,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 3,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 4,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 5,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 6,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id:7,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 8,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        },
        {
            id: 9,
            title: "reza",
            img: "",
            createdAt: "",
            like: 17,
            readtime: 5,
            comments: [
                {},
                {},
                {}
            ],
            desc: ""
        }
    ]
}