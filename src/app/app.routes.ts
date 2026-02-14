import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Login } from './Components/login/login';
import { Register } from './Components/register/register';
import { Cart } from './Components/cart/cart';
import { Categories } from './Components/categories/categories';
import { ForgetPassword } from './Components/forget-password/forget-password';
import { Profile } from './Components/profile/profile';
import { NotFounded } from './Components/not-founded/not-founded';
import { About } from './Components/about/about';
import { Contact } from './Components/contact/contact';
import { ProductDetails } from './Components/product-details/product-details';
import { authGuard } from './Core/Guards/auth-guard';
import { isLoggedGuard } from './Core/Guards/is-logged-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [authGuard] },
  {
    path: 'product-details/:id',
    component: ProductDetails,
    canActivate: [authGuard],
  },
  { path: 'login', component: Login, canActivate: [isLoggedGuard] },
  { path: 'register', component: Register, canActivate: [isLoggedGuard] },
  { path: 'profile', component: Profile, canActivate: [authGuard] },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  { path: 'categories/:catSlug', component: Categories, canActivate: [authGuard] },
  { path: 'categories', component: Categories },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'about', component: About, canActivate: [authGuard] },
  { path: 'contact', component: Contact, canActivate: [authGuard] },
  { path: '**', component: NotFounded, canActivate: [authGuard] },
];
