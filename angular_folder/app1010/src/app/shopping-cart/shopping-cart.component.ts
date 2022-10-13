import { Component, OnInit } from '@angular/core';
import { CartInterface } from '../cart-interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  cartItems:CartInterface[] = [] as CartInterface[];

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }



}
