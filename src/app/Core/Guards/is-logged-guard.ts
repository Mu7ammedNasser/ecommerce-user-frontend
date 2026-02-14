import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isLoggedIn = isPlatformBrowser(platformId) && !!localStorage.getItem('user');

  if (!isLoggedIn) {
    return true;
  }

  // Already logged in: redirect to home so they don't see login/register
  return router.createUrlTree(['/products']);
};
