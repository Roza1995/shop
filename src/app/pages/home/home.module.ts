import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ProductsListComponent } from './../../products-list/products-list.component';
import { ProductRowComponent } from './../../products-list/components/product-row/product-row.component';
import { HomeComponent } from './../../pages/home/home.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ProductRowComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
