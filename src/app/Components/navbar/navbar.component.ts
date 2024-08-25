import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLoggedUser:boolean = false;
  constructor(private _AuthService:AuthService){}


  logout()
  {
    this._AuthService.logOut()
    // console.log(Response);
    
  }

  ngOnInit(){

    // act as observable

    this._AuthService.isLoggedInSubject.subscribe((isLogged)=> {this.isLoggedUser = isLogged})

  }
}
