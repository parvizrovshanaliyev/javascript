import {Product} from "./Product";

export interface IProductService{
    getById(id:number):Product;
    getAll():Array<Product>;
    create(entity:Product):void;
    delete(entity:Product):void;
}