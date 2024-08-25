import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  // singletone instance
  // interceptor

  // headers: any = { token: localStorage.getItem("token") }


  addCartItem(id: string): Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId: id
      },
      // {
      //   headers: this.headers
      // }
    )
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',
      // {
      //   headers: this.headers
      // }
    )
  }

  updatQuantity(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count: count
      },
      // {
      //   //the token used to know wich cart for who person that i want to update the quantity for
      //   headers: this.headers
      // },

    )
  }

  removeCartItem(id: string): Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      // {
      //   headers: this.headers
      // }
    )
  }

  clearUserCart(): Observable<any> {
    return this._HttpClient.delete('https://ecommerce.routemisr.com/api/v1/cart',
      // {
      //   headers: this.headers
      // }
    )
  }
}
