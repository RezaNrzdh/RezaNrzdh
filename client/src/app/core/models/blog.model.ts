export class BlogModel {
    _id: number;
    title: string;
    slug: string;
    date: number;
    like: number;
    visit: number;
    read: number;
    img: string;
    desc: string;
    comment: Array<object> = [];
}
