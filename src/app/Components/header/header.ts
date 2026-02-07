import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { Auth } from '../../Core/Services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);
  protected auth = inject(Auth);

  logout() {
    this.auth.clearUser();
    this.router.navigate(['/login']);
  }
}
