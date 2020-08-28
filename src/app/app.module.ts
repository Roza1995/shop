//import { HomeModule } from './pages/home/home.module';
//import { AboutModule } from './pages/about/about.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './components/root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent  } from './pages/forgot-password/forgot-password.component';
import { ProductItemComponent } from './pages/product-item/product-item.component';
import { InfoComponent } from './pages/product-item/components/info/info.component';
import { ReviewComponent } from './pages/product-item/components/review/review.component';
import { ShopsComponent } from './pages/product-item/components/shops/shops.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LogInComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ProductItemComponent,
    InfoComponent,
    ReviewComponent,
    ShopsComponent,
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //HomeModule,
    //AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
