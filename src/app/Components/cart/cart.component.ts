import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICart } from 'src/app/Interfaces/icart';
import { CartService } from 'src/app/Services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  constructor(private _CartService: CartService, private toastr: ToastrService) { }

  cartDetails?: ICart;
  isEmpty: boolean = true;
  isEmptys: boolean = false;
  isLoading: boolean = false;

  // cartItems = new BehaviorSubject<any>('hello')


  ngOnInit(): void {

    this.isLoading = true
    this._CartService.getUserCart().subscribe({
      next: (response) => {
        this.cartDetails = response.data
        this.isLoading = false
      },
      error: (err) => {
        console.log(err)
        this.isLoading = false
      }
    })
  }

  updatQuantity(id: string, count: number) {
    this._CartService.updatQuantity(id, count).subscribe({
      next: (response) => {
        console.log(response);
        this.cartDetails = response.data
        this.toastr.success('Item Updated', '',
          { timeOut: 1000 }
        );
      },
      error: (err) => {
        console.log(err);
      }

    })
  }

  handleremoveCartItem(id: string) {
    this._CartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log(response),
          this.cartDetails = response.data
        this.toastr.show('Item Removed Successfuly', 'Item Removed', { timeOut: 2000 })
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

  handleclearUserCart() {
    this.isEmptys = false
    this.isEmpty = true
    this._CartService.clearUserCart().subscribe({
      next: (response) => {
        console.log('products deleted'),
          this.cartDetails = response.data
        this.isEmpty = false
        this.isEmptys = true
      },
      error: (err) => {
        console.log(err),
          this.isEmpty = false
      },
    })
  }
}
