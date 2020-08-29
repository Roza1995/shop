import { ReviewComponent } from './review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const reviewRoutes: Routes = [
  { path: '', component: ReviewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(reviewRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ReviewModule { }
