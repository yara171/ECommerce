import { IBrand } from "./ibrand";
import { ICategory } from "./icategory";
import { ISubcategory } from "./isubcategory";

export interface IProduct {

    sold:number;
    images:string[];
    subcategory:ISubcategory[];
    ratingsQuantity:number;
    _id:string;
    title:string;
    description:string;
    quantity:number;
    price:number;
    priceAfterDiscount:number;
    imageCover:string;
    category:ICategory;
    brand:IBrand;
    ratingsAverage:number;

}
