export class BlogModel {
    _id: number;
    title: string;
    slug: string;
    short: string;
    date: number;
    publish: boolean;
    like: number;
    visit: number;
    read: number;
    img: string;
    thumbnail: string;
    desc: string;
    comment: Array<object> = [];
}
