import { InfoComponent } from './info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';


const infoRoutes: Routes = [
  { path: '', component: InfoComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(infoRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class InfoModule { }
