import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksmoduleComponent } from './booksmodule/booksmodule.component';
import { LoginmoduleComponent } from './loginmodule/loginmodule.component';
import { PaymentmoduleComponent } from './paymentmodule/paymentmodule.component';
import { RegistrationmoduleComponent } from './registrationmodule/registrationmodule.component';
import { ShoppingmoduleComponent } from './shoppingmodule/shoppingmodule.component';


const routes: Routes = [
  {path:'login',component:LoginmoduleComponent},
  {path:'registration',component:RegistrationmoduleComponent},
  {path:'booksmodule',component:BooksmoduleComponent},
  {path:'shoppingmodule',component:ShoppingmoduleComponent}, 
  {path:'paymentmodule',component:PaymentmoduleComponent},
  {path:'ordermodule',component:BooksmoduleComponent}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
