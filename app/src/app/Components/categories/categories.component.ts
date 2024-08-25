import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/icategory';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  allCategories: ICategory[] = [];
  isLoading: boolean = false

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

    this.isLoading = true
    this._productService.getAllCategories().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.allCategories = response.data
        this.isLoading = false
      }
    })
  }

}
