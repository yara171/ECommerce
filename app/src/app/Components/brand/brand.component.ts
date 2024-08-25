import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBrand } from 'src/app/Interfaces/ibrand';
import { IProduct } from 'src/app/Interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  // brandId!: IBrand
  paramsId: string | null = ''

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.paramsId = params.get("id")
      this._productService.getProductByBrand(this.paramsId).subscribe({
        next: (response) => { console.log(response) },
        error: (err) => { console.log(err) }
      })
    })
  }

}
