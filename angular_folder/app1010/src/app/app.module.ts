import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsListComponent } from './donuts-list/donuts-list.component';
import { DonutItemComponent } from './donut-item/donut-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'donuts', component:DonutsListComponent},
  {path: 'donuts/:id', component:DonutItemComponent},
  {path: 'cart', component:ShoppingCartComponent},
  {path: '', redirectTo: '/donuts', pathMatch:'full'},
  {path: '**', component: PageNotFoundComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    DonutsListComponent,
    DonutItemComponent,
    ShoppingCartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
