import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../Core/Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  errorMsg = signal<string>("");
  isLoading = signal<boolean>(false);
  constructor(private authService: Auth, private router: Router) { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }




  registerForm: FormGroup = new FormGroup({

    firstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
    confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{6,}$/)]),
  }, this.passwordsMatch)
  onSubmit() {
    this.errorMsg.set("");

    if (this.registerForm.valid) {
      this.isLoading.set(true);
      this.authService.loginApi().subscribe({
        next: (users: any[]) => {
          console.log(users);
          const user = users.find(u => u.email === this.registerForm.value.email);
          if (user) {  
            this.errorMsg.set("User already exists");
            this.isLoading.set(false);
          }
          else {
            this.authService.registerApi(this.registerForm.value).subscribe({
              next: (response) => {
                console.log(response);
                this.isLoading.set(false);
                this.navigateToLogin();
              },
              error: (err) => {
                console.error(err);
                this.isLoading.set(false);
                const message = err.error?.message || err.message || "An unexpected error occurred. Please try again.";
                this.errorMsg.set(message);
              },
              complete: () => {
                console.log("Registration completed");
              }
            })
          }
        },
        error: (err) => {
          console.error(err);
          const message = err.error?.message || err.message || "An unexpected error occurred. Please try again.";
          this.errorMsg.set(message);
        }
      })

      // this.authService.registerApi(this.registerForm.value).subscribe({
      //   next: (response) => {
      //     console.log(response);
      //     this.isLoading.set(false);
      //     this.navigateToLogin();
      //   },
      //   error: (err) => {
      //     console.error(err);
      //     this.isLoading.set(false);
      //     const message = err.error?.message || err.message || "An unexpected error occurred. Please try again.";
      //     this.errorMsg.set(message);
      //   },
      //   complete: () => {
      //     console.log("Registration completed");
      //   }


      // })

    }
    else {

      console.log(this.registerForm.value);
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