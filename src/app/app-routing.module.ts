import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ProductsComponent } from './Components/products/products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { VerifyResetCodeComponent } from './Components/verify-reset-code/verify-reset-code.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { authGuard } from './Shared/Guards/auth.guard';
import { noAuthGuard } from './Shared/Guards/no-auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandComponent } from './Components/brand/brand.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'products', canActivate: [authGuard], component: ProductsComponent },
  { path: 'categories', canActivate: [authGuard], component: CategoriesComponent },
  { path: 'category/:id', canActivate: [authGuard], component: CategoryComponent },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  { path: 'products/brand/:id', canActivate: [authGuard], component: BrandComponent },
  { path: 'product/:id', canActivate: [authGuard], component: ProductDetailsComponent },

  { path: 'login', canActivate: [noAuthGuard], component: LoginComponent },
  { path: 'register', canActivate: [noAuthGuard], component: RegisterComponent },
  { path: 'forget-password', canActivate: [noAuthGuard], component: ForgetPasswordComponent },
  { path: 'verify-reset-code', canActivate: [noAuthGuard], component: VerifyResetCodeComponent },
  { path: 'reset-new-password', canActivate: [noAuthGuard], component: ResetPasswordComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
