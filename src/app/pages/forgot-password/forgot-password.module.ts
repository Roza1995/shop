import { ForgotPasswordComponent } from './forgot-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

const forgotpasswordRoutes: Routes = [
  { path: '', component: ForgotPasswordComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(forgotpasswordRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ForgotPasswordModule { }
