import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-main-slider',
  templateUrl: './home-main-slider.component.html',
  styleUrls: ['./home-main-slider.component.css']
})
export class HomeMainSliderComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    navText: ['', ''],
    items: 1,
  }

}
