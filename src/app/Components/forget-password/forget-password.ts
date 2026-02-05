import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {
  isLoading = signal<boolean>(false);
  errorMsg = signal<string>("");

  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });

  constructor(private router: Router) { }

  onSubmit() {
    if (this.forgetForm.valid) {
      console.log('Forget password submitted', this.forgetForm.value);
    } else {
      this.forgetForm.markAllAsTouched();
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
