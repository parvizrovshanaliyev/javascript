import {Product} from "./Product";

export class DataSource{
    get products(): Array<Product> {
        return this._products;
    }
    private _products:Array<Product>;
    constructor() {
        this._products= new Array<Product>(
            new Product(1,'Prd1','Phone',100),
            new Product(2,'Prd2','Phone',200),
            new Product(3,'Prd3','Phone',300),
            new Product(4,'Prd4','Phone',400)
        )
    }
    
    
}