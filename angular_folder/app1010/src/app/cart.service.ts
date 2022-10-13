import { Injectable } from '@angular/core';
import { CartInterface } from './cart-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems:CartInterface[] = [] as CartInterface[];

  addDonutToCart(donutId: number) {
    const donutItemInCart:number = this.cartItems.findIndex((donut) => donut.donutId == donutId);

    if (donutItemInCart) {
      this.cartItems[donutItemInCart].donutCount += 1;
    } else {
      this.cartItems.push({
        donutId: donutId,
        donutCount: 1
      })
    }
    return 'success'
  }
}
