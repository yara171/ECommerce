import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/Interfaces/icategory';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private _productServics: ProductService, private _ActivatedRoute: ActivatedRoute) { }


  categoryId: any;
  categoryDetails?: ICategory;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
      (params) => {
        // console.log(params.get('id'));
        this.categoryId = params.get('id')
      }
    )

    // if (this.categoryId) {
    this._productServics.getSpecificCategory(this.categoryId).subscribe({
      next: (response) => {
        console.log(response);
        this.categoryDetails = response.data
      },
      error: (err) => {
        console.log(err);
      }
    })
    // }
  }

}
