import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';



//import { AboutComponent } from './pages/about/about.component';
//import { ContactComponent } from './pages/contact/contact.component';
//import { LogInComponent } from './pages/log-in/log-in.component';
//import { ForgotPasswordComponent  } from './pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { InfoComponent } from './pages/product-item/components/info/info.component';
import { ReviewComponent } from './pages/product-item/components/review/review.component';
import { ShopsComponent } from './pages/product-item/components/shops/shops.component';



const appRoutes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { 
      path: 'home', 
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
    {  
      path: 'about', 
      loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
    },
    {  
      path: 'contact', 
      loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
    },
    {  
      path: 'login', 
      loadChildren: () => import('./pages/log-in/log-in.module').then(m => m.LogInModule)
    },
    { path: 'product/:id', component: ProductItemComponent,
    children: [
      { path: 'info', component: InfoComponent},
      { path: 'review', component: ReviewComponent},
      { path: 'shops', component: ShopsComponent},
    ]

    },
    {  
      path: 'forgot-password', 
      loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
    },
    { path: '**', component: NotFoundComponent},
  ];
  

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
