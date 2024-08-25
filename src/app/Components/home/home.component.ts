import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allProducts: IProduct[] = [];
  isLoading: boolean = false

  constructor(private _productService: ProductService) { }

  ngOnInit() {

    this.isLoading = true
    this._productService.getAllProducts().subscribe({
      next: (Response) => {
        // console.log(Response);
        this.allProducts = Response.data
        this.isLoading = false
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false
      }

    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
