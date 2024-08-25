import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  allProducts: IProduct[] = []
  isLoading: boolean = false

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

}
