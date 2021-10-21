import {IProductService} from "./IProductService";
import {Product} from "./Product";
import {DataSource} from "./DataSource";

export class ProductService implements IProductService{
    private _dataSource: DataSource;
    private readonly _products: Array<Product>;
    constructor() {
        this._dataSource= new DataSource();
         this._products=new Array<Product>();
         this._dataSource.getProducts().forEach(i=>this._products.push(i));
    }

    create(entity: Product): void {
        if(entity.id==0 || entity.id == null){
            entity.id=this.generateId();
            this._products.push(entity);
        }
    }
    update(entity: Product): void {
        
        if(this.getById(entity.id)!=null){
            let index=this._products.indexOf(entity);
            this._products.splice(index,1,entity);
        }
    }

    delete(entity: Product): void {
        if(this.getById(entity.id)!=null){
            let index;
            for (let i = 0; i < this._products.length; i++) {
                if(this._products[i].id===entity.id){
                    index=i;
                }
            }
            this._products.splice(index,1);
        }
    }

    getAll(): Array<Product> {
        return this._products;
    }

    getById(id: number): Product {
        return this._products.filter(i=>i.id===id)[0]
    }

    private generateId():number {
        let key=1;
        while(this.getById(key)!=null){
            key++;
        }
        return key;
    }
}