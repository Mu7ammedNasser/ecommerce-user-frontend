import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '../../Core/Services/auth';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isLoading = signal<boolean>(false);
  errorMsg = signal<string>("");

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
    // rememberMe: new FormControl(false)
  });

  constructor(private router: Router, private authService: Auth) { }

  onSubmit() {
    this.errorMsg.set("");
    if (this.loginForm.valid) {
      this.isLoading.set(true);
      this.authService.loginApi().subscribe({
        next: (users: any[]) => {
          const user = users.find(u => u.email === this.loginForm.value.email && u.password === this.loginForm.value.password);
          this.isLoading.set(false);
          if (user) {
            console.log('Login successful', user);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/home']);
          } else {
            this.errorMsg.set("Invalid email or password.");
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMsg.set("An error occurred. Please try again.");
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToForgetPassword() {
    this.router.navigate(['/forget-password']);
  }
}
