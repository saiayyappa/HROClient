import { RouterModule, Routes } from '@angular/router';

import {CartComponent} from './cart/cart.component';
import { NgModule } from '@angular/core';
import {RegisterComponent} from './user/register/register.component';
import {RemedyComponent} from './remedy/remedy.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'users', component: UserComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'remedy', component: RemedyComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
