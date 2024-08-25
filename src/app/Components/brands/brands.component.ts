import { Component } from '@angular/core';
import { IBrand } from 'src/app/Interfaces/ibrand';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {

  allBrands: IBrand[] = [];
  isLoading: boolean = false

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

    this.isLoading = true
    this._productService.getAllBrands().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.allBrands = response.data
        this.isLoading = false
      }
    })
  }
}
