import { Component, OnInit } from '@angular/core';
import { DataService } from './../../core/services/data.service';
import { Product } from './../../core/models/product';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  public product: Product;

  constructor(private activateRoute: ActivatedRoute,
    private _dataService: DataService) { }

  ngOnInit(): void {

     this.activateRoute.params
      .subscribe(({ id }) => {
      this._dataService.getProductsFromDB()
      .subscribe(({ products }) => {
        this.product = products.filter((product) => product.id === +id)[0]
      })
    });

    this.activateRoute.queryParams
    .subscribe((queryParams) => {
      console.log(queryParams);
    })
    
  }

}
