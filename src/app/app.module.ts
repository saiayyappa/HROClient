import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {CartComponent} from './cart/cart.component';
import {CommonComponent} from './common/common.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RemedyComponent} from './remedy/remedy.component';
import {UserComponent} from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommonComponent,
    RemedyComponent,
    CartComponent,
    SignInComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
