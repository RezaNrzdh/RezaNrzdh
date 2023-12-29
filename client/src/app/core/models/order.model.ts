export class OrderModel {
    title: string;
    icon: string;
    desc: string;
    options: Array<{
        title: string;
        plans: Array<{
            title: string;
            popular: boolean;
            desc: string;
            price: number;
            props: Array<string>;
        }>;
    }>;
}
