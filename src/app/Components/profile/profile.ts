import { Component, inject, OnInit, signal } from '@angular/core';
import { ProfileHeader } from '../profile-header/profile-header';
import { ProfileContactInfo } from '../profile-contact-info/profile-contact-info';
import { ProfileOrders } from '../profile-orders/profile-orders';
import { ProfileContactUs } from '../profile-contact-us/profile-contact-us';
import { Auth } from '../../Core/Services/auth';

@Component({
  selector: 'app-profile',
  imports: [ProfileHeader, ProfileContactInfo, ProfileOrders, ProfileContactUs],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  private authService = inject(Auth);

  user = signal<any>(null);

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    try {
      const userToken = this.authService.userToken();

      if (!userToken) {
        console.warn('No user token found');
        this.user.set(null);
        return;
      }

      const userObject = JSON.parse(userToken);
      this.user.set(userObject);
      console.log('User data loaded:', userObject);
    } catch (error) {
      console.error('Error parsing user data:', error);
      this.user.set(null);
    }
  }
}
