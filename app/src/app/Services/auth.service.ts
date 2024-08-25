import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Iregform } from '../Interfaces/iregform';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLoggedInSubject = new BehaviorSubject<boolean> (localStorage.getItem('token')? true: false);

  constructor(private _HttpClient:HttpClient, private _Router:Router) { }

  register(regForm:Iregform):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup' , regForm)
  }

  login(logForm:Iregform):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin' , logForm)
  }

  logOut()
  {
    // remove token from local storage
    localStorage.removeItem('token')
    console.log(localStorage);
    

    // navigat to login page
    this._Router.navigate(['/login'])

    this.isLoggedInSubject.next(false);
  }

  forgetPassword(form:Iregform):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords' , form)
  }

  verifyResetCode(form:any):Observable<any>
  {
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode' , form)
  }

  resetNewPassword(form:Iregform):Observable<any>
  {
    return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword' , form)
  }

}
