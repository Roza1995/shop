import { Product } from './../core/models/product';
import { Component, OnInit, ContentChild, ElementRef} from '@angular/core';
import { NgForm} from '@angular/forms';

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
  public isLoading: boolean = true;
  public modifiedText:string;
  

  

  constructor() {
    
   }

  ngOnInit(): void {
    setTimeout(this._getProducts.bind(this),1000);
  }

  private _getProducts(): void{
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
    this.isLoading = !this.isLoading;
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
    this.isLoading = true;
    const changeSearchText = searchText.toLowerCase().trim();
      this.searchText = searchText;
      setTimeout(()=> {
        this.products = this.cachedProducts.filter((product)=>{
          return product.title.toLowerCase().includes(changeSearchText);
        })
        this.isLoading = false;
      },2000)
      

  }

  public sortProducts(product: string): void{
    this.isLoading = true;
    setTimeout(()=>{
      switch(product){
        case "price":
          this.products = this.cachedProducts.sort(this.SortByPrice);
          console.log(this.products);
          break;
        case "price-reverse":
          this.products = this.cachedProducts.sort(this.SortByPrice).reverse();
          console.log(this.products);
          break;
        case  "alphabetical":
          this.products = this.cachedProducts.sort(this.SortByTitle);
          console.log(this.products);
          break;
        case "alphabetical-reverse":
          this.products = this.cachedProducts.sort(this.SortByTitle).reverse();
          console.log(this.products);
          break;
      }
      this.isLoading = false;
    }, 2000)
    
    
  }

  public SortByPrice(price1: Product, price2: Product): number{
    if(price1.price > price2.price)return 1
     else if(price1.price ===  price2.price) return 0
      else return -1
  }

  public SortByTitle(title1: Product, title2: Product): number{
    if(title1.title > title2.title)return 1
    else if(title1.title ===  title2.title) return 0
     else return -1
  }

  
  public changeName(value: string): void{

    console.log(value);
  }

  onSubmit(f: NgForm) {
    //this.isLoading = true;
    //setTimeout(()=>{
      this.products[0] = f.value
      console.log(f.value); 
      console.log(f.valid); 
      this.isLoading = false;
    //},1000)
     
  }
}
