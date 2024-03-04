export class PortfolioModel {
    _id: number;
    title: string;
    slug: string;
    date: number;
    publish: number;
    like: number;
    visit: number;
    thumbnail: string;
    img: Array<string> = [];
    desc: string;
    category: number;
    comment: Array<object> = [];
}
