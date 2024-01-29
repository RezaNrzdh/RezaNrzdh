export class PortfolioModel {
    title: string;
    slug: string;
    date: number;
    like: number;
    visit: number;
    thumbnail: string;
    img: Array<string> = [];
    desc: string;
    category: number;
    comment: Array<object>;
}
