import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(
    private http: HttpClient
  ) {}


  addToCart(product) {
    this.items.push(product);
  }
  
  removeFromCart(itemId) {
    var removed = this.items.slice(itemId)
    this.items.splice(itemId,1);  
    return removed
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}