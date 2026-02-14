import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  const isLoggedIn = isPlatformBrowser(platformId) && !!localStorage.getItem('user');

  if (isLoggedIn) {
    return true;
  }

  // Return UrlTree so both client and SSR respond with a redirect to /login
  return router.parseUrl('/login');
};
