import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

/** Minimum time (ms) the spinner is visible — helps you see it with fast local/JSON server requests */
const MIN_SPINNER_MS = 600;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  const started = Date.now();
  spinner.show();

  return next(req).pipe(
    finalize(() => {
      const elapsed = Date.now() - started;
      const wait = Math.max(0, MIN_SPINNER_MS - elapsed);
      if (wait > 0) {
        setTimeout(() => spinner.hide(), wait);
      } else {
        spinner.hide();
      }
    })
  );
};
