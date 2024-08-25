import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
  })


  apiErrorMessage = "";
  apiErrorMsg = "";
  isLoading: boolean = false;

  handleLogin(logForm: FormGroup) {
    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log(this.loginForm.value)
      this._AuthService.login(logForm.value).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          // console.log(localStorage);

          // console.log(response);
          this._Router.navigate(['/home'])
          this._AuthService.isLoggedInSubject.next(true)
          this.isLoading = false;

        },

        error: (err) => {
          console.log(err);
          this.isLoading = false
          // this._AuthService.isLoggedInSubject.next(false)

          this.apiErrorMessage = err.error.message
          this.apiErrorMsg = err.error.errors?.msg
        }
      })

    }

  }
}
