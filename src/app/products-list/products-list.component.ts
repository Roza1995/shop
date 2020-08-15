import { Product } from './../core/models/product';
import { Component, OnInit, ContentChild, ElementRef} from '@angular/core';
import { NgForm} from '@angular/forms';
import { DataService } from './../core/services/data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ DataService ]
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



  

  constructor(private dataservice: DataService) {
    
   }

  ngOnInit(): void {
    setTimeout(this._getProducts.bind(this),1000);

   /*  this.dataservice.getTodos()
    .subscribe((res)=> {
      console.log(res);
    }, (err)=>{
      console.log(err);
    }) */
  }

  private _getProducts(): void{
    this.dataservice.getProductsFromDB().subscribe(data => this.products = data["products"]);
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
          this.products = this.cachedProducts.sort(this.sortByPrice);
          console.log(this.products);
          break;
        case "price-reverse":
          this.products = this.cachedProducts.sort(this.sortByPrice).reverse();
          console.log(this.products);
          break;
        case  "alphabetical":
          this.products = this.cachedProducts.sort(this.sortByTitle);
          console.log(this.products);
          break;
        case "alphabetical-reverse":
          this.products = this.cachedProducts.sort(this.sortByTitle).reverse();
          console.log(this.products);
          break;
      }
      this.isLoading = false;
    }, 2000)
    
    
  }

  public sortByPrice(price1: Product, price2: Product): number{
    if(price1.price > price2.price)return 1
     else if(price1.price ===  price2.price) return 0
      else return -1
  }

  public sortByTitle(title1: Product, title2: Product): number{
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
