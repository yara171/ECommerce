import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private _Authservice:AuthService , private _Router:Router){}

  // passwordMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  // const password = control.get('password');
  // const confirmPassword = control.get('rePassword');

  // return password?.value === confirmPassword?.value ? null : { notMatched: true };


  registerForm:FormGroup =  new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
    rePassword: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{5,}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  })
  // , { validators: this.passwordMatchingValidator })


  apiErrorMessage="";
  apiErrorMsg="";
  isLoading:boolean = false;

  handleRegister(regForm:FormGroup){
    if (this.registerForm.valid ,
      this.isLoading = true
    ) {
      this._Authservice.register(regForm.value).subscribe({
        next: (response) => {
          console.log(response)
          this.isLoading = false,
          this._Router.navigate(['/login'])
        },
        error: (err) => {
          console.log(err)
          this.isLoading = false
          this.apiErrorMessage = err.error.message
          this.apiErrorMsg = err.error?.errors?.msg
          console.log(this.apiErrorMessage)
        },
      })
    }
    
  }
}
