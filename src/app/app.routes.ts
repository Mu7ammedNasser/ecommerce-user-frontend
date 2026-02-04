import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Login } from './Components/login/login';
import { Register } from './Components/register/register';
import { Cart } from './Components/cart/cart';
import { Categories } from './Components/categories/categories';
import { ForgetPassword } from './Components/forget-password/forget-password';
import { Profile } from './Components/profile/profile';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: Register },

  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'cart', component: Cart },
  { path: 'categories', component: Categories },
  { path: 'forget-password', component: ForgetPassword },

  { path: '**', redirectTo: 'home' },
];
