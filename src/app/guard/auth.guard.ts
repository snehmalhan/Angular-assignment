import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/login/auth.service';
// Adjust the path as needed

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    // Redirect to login page
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
