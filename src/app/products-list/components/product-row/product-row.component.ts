import { Component, Input, Output,  OnInit, EventEmitter, ViewChild,  ElementRef, AfterViewInit} from '@angular/core';
import { Product } from './../../../core/models/product';
import { Router, ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit, AfterViewInit{
  @ViewChild("childText",{static: false})
  public childText: ElementRef;

  @Input() 
  public product : Product;
  
  @Output() selectedProduct = new EventEmitter<any>();
  
  constructor() {}

   ngOnInit() : void {
     
   }

   ngAfterViewInit(): void {
     console.log(this.childText);
   }

   public getInfo() : void{
    this.selectedProduct.emit(this.product); 
  }
    
}


 


