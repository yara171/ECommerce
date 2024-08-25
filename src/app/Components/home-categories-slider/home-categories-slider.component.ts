import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Interfaces/icategory';
import { ProductService } from 'src/app/Services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-categories-slider',
  templateUrl: './home-categories-slider.component.html',
  styleUrls: ['./home-categories-slider.component.css']
})
export class HomeCategoriesSliderComponent implements OnInit {

  allCategories: ICategory[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

    this._productService.getAllCategories().subscribe({
      next: (response) => {
        // console.log(response.data);
        this.allCategories = response.data
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    // navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

}
