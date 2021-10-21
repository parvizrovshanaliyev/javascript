import {ProductService} from "./ProductService";
import {Product} from "./Product";

let _productService= new ProductService();

let result;

result=_productService.getAll();
result=_productService.getById(3); 

let entity=new Product(2,'2yeniDeyisdi',"2yeniDeyisdi",200);
// _productService.create(entity);
_productService.update(entity);
// _productService.delete(result)
result=_productService.getAll();

console.log(result);  