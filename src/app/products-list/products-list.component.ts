import { DataService } from './../core/services/data.service';
import { Product } from './../core/models/product';
import { Component, OnInit, ContentChild, ElementRef} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ DataService ]
})
export class ProductsListComponent implements OnInit {

  @ContentChild("contentChild", {static:false})
  public contentChild: ElementRef;
  public products: Product[] = [];
  public selectedProduct: Product;
  public searchText: string;
  public cachedProducts: Product[] = [];
  public price: number;
  public title: string;
  public product: string[] = ['price','price-reverse','alphabetical','alphabetical-reverse'];
  public isLoading: boolean = true;
  public modifiedText:string;
  public editFormGroup: FormGroup;
  public show: boolean = false;
  public id: string;
  public category: string;
  

  

  constructor(private dataservice: DataService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute){

    this.editFormGroup = this.formBuilder.group({
      title: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]+')]),
      price: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      description: new FormControl('',[Validators.required, Validators.maxLength(255)])
                  
    });

  }
      

  ngOnInit(): void {
    setTimeout(this._getProducts.bind(this),1000);
  
    /* this.dataservice.getTodos()
    .subscribe((res)=> {
      console.log(res);
    }, (err)=>{
      console.log(err);
    })  */

    
  }

  private _getProducts(): void{
    this.dataservice.getProductsFromDB()
      .subscribe(data => {
        this.products = data["products"]
        this.cachedProducts = this.products;
  });
    
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

  public filterBYCategory(categories: string){
    this.products = this.cachedProducts.filter((product)=>{
      return product.category.includes(categories);
    })

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

  
  public onSubmit(index:number): void{
    this.isLoading = true;
    setTimeout(()=>{
      this.products[index] = this.editFormGroup.getRawValue();
      this.isLoading = false;
    },1000) 
  }

  

}
