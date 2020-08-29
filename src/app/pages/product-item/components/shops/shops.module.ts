import { ShopsComponent } from './shops.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';


const shopsRoutes: Routes = [
  { path: '', component: ShopsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(shopsRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ShopsModule { }
