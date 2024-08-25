import { IProducts } from "./iproducts";

export interface ICart {

    _id: string;
    cartOwner: string;
    products: IProducts[];
    totalCartPrice: number;
}
