import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private _CartService: CartService, private toastr: ToastrService) { }
  cart: any;
  @Input() product!: IProduct

  addToCart(id: string) {
    // localStorage.setItem('id', id)
    this._CartService.addCartItem(id).subscribe({
      next: (response) => {
        console.log(response),
          this.toastr.success('Successfuly added to cart!', 'Product Added',
            {
              closeButton: true,
              timeOut: 2000,
              progressBar: true
            }
          );
      },
      error: (err) => { console.log(err) }
    })

  }


}
