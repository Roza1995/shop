import { Component, Input, Output,  OnInit, EventEmitter } from '@angular/core';
import { Product } from './../../../core/models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit{
  @Input() public product : Product;
  @Output() selectedProduct = new EventEmitter<any>();
  
  constructor() {
    }

   ngOnInit() : void {

   }

   public getInfo() : void{
    this.selectedProduct.emit(this.product); 
  }

 

}
