import { Injectable } from '@angular/core';
import { CartInterface } from './cart-interface';
import { DonutItemInterface } from './donut-item-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartItems:CartInterface[] = [] as CartInterface[];

  addDonutToCart(donutObject: DonutItemInterface) {
    const donutItemInCart:number = this.cartItems.findIndex((donut) => donut.donutId == donutObject.id);

    console.log(donutItemInCart);
    if (donutItemInCart >= 0) {
      this.cartItems[donutItemInCart].donutCount += 1;
    } else {
      this.cartItems.push({
        donutId: donutObject.id,
        donutName: donutObject.name,
        donutCount: 1,
        donutPrice: 1.00, //default for now,
        donutCalories: donutObject.calories
      })
    }
    console.log(this.cartItems);
    return 'success';
  }

  getCartItems(): CartInterface[] {
    return this.cartItems;
  }
}
