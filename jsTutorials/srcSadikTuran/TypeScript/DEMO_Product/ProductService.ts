import {IProductService} from "./IProductService";
import {Product} from "./Product";

export class ProductService implements IProductService{
    constructor() {
    }

    create(entity: Product): void {
    }

    delete(entity: Product): void {
    }

    getAll(): Array<Product> {
        return undefined;
    }

    getById(id: number): Product {
        return undefined;
    }
}