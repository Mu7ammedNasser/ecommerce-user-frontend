// src/app/services/theme.service.ts
import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'theme'; // 'dark' | 'light'

  // Will be initialized in the constructor (browser-only).
  isDarkMode = signal<boolean>(false);

  constructor() {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Initialize from localStorage or system preference (and whatever index.html applied).
      const saved = localStorage.getItem(this.storageKey); // 'dark' | 'light' | null
      const prefersDark =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialIsDark = saved ? saved === 'dark' : prefersDark;

      // Apply immediately to avoid any flash during first paint.
      const htmlElement = document.documentElement;
      htmlElement.classList.toggle('dark', initialIsDark);
      this.isDarkMode.set(initialIsDark);

      // Apply theme when it changes
      effect(() => {
        const isDark = this.isDarkMode();
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
      });
    }
  }

  toggleTheme() {
    this.isDarkMode.update((value) => !value);
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode.set(isDark);
  }
}
