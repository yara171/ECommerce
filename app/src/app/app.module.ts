import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeCategoriesSliderComponent } from './Components/home-categories-slider/home-categories-slider.component';
import { HomeMainSliderComponent } from './Components/home-main-slider/home-main-slider.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { CategoryComponent } from './Components/category/category.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { BrandComponent } from './Components/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandsComponent,
    HomeComponent,
    RegisterComponent,
    ProductsComponent,
    LoginComponent,
    FooterComponent,
    CartComponent,
    CategoriesComponent,
    NotfoundComponent,
    ForgetPasswordComponent,
    VerifyResetCodeComponent,
    ResetPasswordComponent,
    ProductComponent,
    ProductDetailsComponent,
    HomeCategoriesSliderComponent,
    HomeMainSliderComponent,
    CategoryComponent,
    LoadingComponent,
    BrandComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
