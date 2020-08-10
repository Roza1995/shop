import { Product } from './../core/models/product';
import { Component, OnInit, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @ContentChild("contentChild", {static:false})
  public contentChild: ElementRef;
  public products : Product[] = [];
  public selectedProduct: Product;
  public searchText: string;
  public cachedProducts: Product[]= [];
  public price: number;
  public title: string;
  public product: string[] = ['price','price-reverse','alphabetical','alphabetical-reverse'];

  constructor() {
    
   }

  ngOnInit(): void {
    this.cachedProducts = this.products = [
      new Product(
      1, 
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      "Red Nike",
      300,
      "Lightweight construction with breathable mesh fabric for maximum comfort and performance.Lace-up closure for a snug fit.High quality EVA sole for traction and exceptional durability.",
      ),
      new Product(
        2, 
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "Grey Nike",
        150,
        "Lightweight construction with breathable mesh fabric for maximum comfort and performance.Lace-up closure for a snug fit.High quality EVA sole for traction and exceptional durability.",
        ),
      new Product(
          3, 
          "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "Puma",
          190,
          "Lightweight construction with breathable mesh fabric for maximum comfort and performance.Lace-up closure for a snug fit.High quality EVA sole for traction and exceptional durability.",
          )
    
    ]
  }

  getSelected(product: Product): void{
    this.selectedProduct = product;
  }


  public isSelected(product: Product): boolean {
    if(product && this.selectedProduct && product.id === this.selectedProduct.id){
      return true;
    }
      return false;
  }

  public searchProducts(searchText: string): void{
    const changeSearchText = searchText.toLowerCase().trim()
      this.searchText = searchText;
      this.products = this.cachedProducts.filter((product)=>{
        return product.title.toLowerCase().includes(changeSearchText);
      })

  }

  public sortProducts(product: string): any{
    if(product === "price"){
      this.products = this.cachedProducts.sort(this.SortByPrice);
      console.log(this.products);
    }else if(product === "price-reverse"){
      this.products = this.cachedProducts.sort(this.SortByPrice).reverse();
      console.log(this.products);
    }else if(product === "alphabetical"){
      this.products = this.cachedProducts.sort(this.SortByTitle);
      console.log(this.products);
    }else if (product === "alphabetical-reverse"){
      this.products = this.cachedProducts.sort(this.SortByTitle).reverse();
      console.log(this.products);
    }
  }

  public SortByPrice(price1: Product, price2: Product): number{
    if(price1.price > price2.price)return 1
     else if(price1.price ===  price2.price) return 0
      else return -1
  }

  public SortByTitle(title1: Product, title2: Product){
    if(title1.title > title2.title)return 1
    else if(title1.title ===  title2.title) return 0
     else return -1
  }

}
