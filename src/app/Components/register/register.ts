import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../Core/Services/auth';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  errorMsg = signal<string>("");
  isLoading = signal<boolean>(false);
  constructor(private authService: Auth) { }




  registerForm: FormGroup = new FormGroup({

    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null),
    city: new FormControl(null),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
  }, this.passwordsMatch)
  onSubmit() {
    this.errorMsg.set("");

    if (this.registerForm.valid) {
      this.isLoading.set(true);
      this.authService.registerApi(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);
          this.isLoading.set(false);
          // Handle success (e.g., navigate to login)
        },
        error: (err) => {
          console.error(err);
          this.isLoading.set(false);
          // Backend might return error.error.message or just error.message
          const message = err.error?.message || err.message || "An unexpected error occurred. Please try again.";
          this.errorMsg.set(message);
        },
        complete: () => {
          console.log("Registration completed");
        }


      })

    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }

  passwordsMatch(a: AbstractControl) {
    if (a.get('password')?.value === a.get('confirmPassword')?.value) {
      return null;
    }
    else {
      return { mismatch: true };

    }

  }
}