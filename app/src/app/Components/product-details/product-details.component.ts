import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/Services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  productId: string | null = null
  data?: IProduct;
  apiError: string = '';
  isLoading: boolean = false

  constructor(private _ProductService: ProductService, private _ActivatedRoute: ActivatedRoute, private _CartService: CartService, private _toastr: ToastrService) { }


  ngOnInit(): void {
    this.isLoading = true
    this._ActivatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params.get('id'))
        this.productId = params.get("id")

      }
    )

    if (this.productId != null) {
      this.isLoading = true
      this._ProductService.getProductById(this.productId).subscribe({
        next: (Response) => {
          this.data = Response.data
          this.isLoading = false
        },
        error: (err) => {
          this.apiError = err.message;
          this.isLoading = false
          // console.log(err);
        }
      })
    }
  }

  addToCart(id: any) {
    this._CartService.addCartItem(id).subscribe(
      {
        next: (response) => {
          console.log(response);
          this._toastr.success('Successfuly added to cart!', 'Product Added',
            {
              closeButton: true,
              timeOut: 2000,
              progressBar: true
            }
          );
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navSpeed: 700,
    navText: ['&lt;', '&gt;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
