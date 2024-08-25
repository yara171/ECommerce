import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (Route, state) => {
  
  let router = inject(Router);


  if (localStorage.getItem('token')) 
  {
    return true;
    
  } 
  else {
    router.navigate(['/login'])
    return false
  }
  
};
