import { ThisReceiver } from '@angular/compiler';
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

  totalPrice(): number {
    let price: number = 0;
    this.cartItems.forEach(item => {
      price += item.donutCount * item.donutPrice;
      return price;
    })
    return price;
  }

  totalCalories(): number {
    let calories: number = 0;
    this.cartItems.forEach(item => {
      calories += item.donutCount * item.donutCalories;
      return calories;
    })
    return calories;
  }

  removeDonutFromCart(donutCartId:number) {
    const donutIndex: number = this.cartItems.findIndex((cartItem) => cartItem.donutId == donutCartId);
    this.cartItems.splice(donutIndex, 1);
  }
  removeOneQuantityFromCart(donutCartId:number) {
    const donutIndex: number = this.cartItems.findIndex((cartItem) => cartItem.donutId == donutCartId);
    this.cartItems[donutIndex].donutCount -= 1;
  }

  

}
