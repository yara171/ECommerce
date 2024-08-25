import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iregform } from 'src/app/Interfaces/iregform';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  apiErrorMessage: string = ""
  isLoading: boolean = false;

  resetPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)])
  })

  handleResetPasswordForm(form: FormGroup) {
    this.isLoading = true;
    this._AuthService.resetNewPassword(form.value).subscribe({
      next: (response) => {
        // console.log(response);

        this.isLoading = false;
        this._Router.navigate(['/login'])
      },

      error: (err) => {
        console.log(err);
        this.apiErrorMessage = err.error.message
        this.isLoading = false;
      }
    })
  }

}
