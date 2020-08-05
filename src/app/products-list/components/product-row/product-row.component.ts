import { Component } from '@angular/core';
import { Product } from './../../../main/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent{
  public product : Product;


  constructor() {
    this.product = new Product(
      1, 
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "Shoes",
      100,
      "Lightweight construction with breathable mesh fabric for maximum comfort and performance.Lace-up closure for a snug fit.High quality EVA sole for traction and exceptional durability.")
   }

   public getInfo(){
     console.log(this.product)
   }

 

}
