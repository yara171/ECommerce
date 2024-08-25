import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/iproduct';
import { IBrand } from '../Interfaces/ibrand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient: HttpClient) { }


  getAllProducts(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }

  getProductById(id: string): Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  }

  getAllCategories(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getSpecificCategory(id: string): Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
  }

  getAllBrands(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/brands')
  }

  getProductByBrand(brandId: string | null): Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand/${brandId}`)
  }



}
