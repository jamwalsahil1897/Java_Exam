import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { RegistrationmoduleComponent } from './registrationmodule/registrationmodule.component';
import { BooksmoduleComponent } from './booksmodule/booksmodule.component';
import { ShoppingmoduleComponent } from './shoppingmodule/shoppingmodule.component';
import { PaymentmoduleComponent } from './paymentmodule/paymentmodule.component';
import { OrdermoduleComponent } from './ordermodule/ordermodule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginmoduleComponent,
    RegistrationmoduleComponent,
    BooksmoduleComponent,
    ShoppingmoduleComponent,
    PaymentmoduleComponent,
    OrdermoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
