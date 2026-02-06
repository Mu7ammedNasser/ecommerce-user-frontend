import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './Components/side-bar/side-bar';
import { ThemeService } from './Core/Services/theme';
import { ThemeToggle } from "./Components/theme-toggle/theme-toggle";
import { Footer } from "./Components/footer/footer";
import { Header } from "./Components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeToggle, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('saas');
  themeService = inject(ThemeService);
}
