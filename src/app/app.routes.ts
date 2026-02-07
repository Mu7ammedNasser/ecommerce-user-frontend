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

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'product-details/:id', component: ProductDetails,},
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'cart', component: Cart },
  { path: 'categories/:catSlug', component: Categories },
  { path: 'categories', component: Categories },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFounded },
];
