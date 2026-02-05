import { Component } from '@angular/core';
import { ProfileHeader } from "../profile-header/profile-header";
import { ProfileContactInfo } from "../profile-contact-info/profile-contact-info";
import { ProfileOrders } from "../profile-orders/profile-orders";
import { ProfileContactUs } from "../profile-contact-us/profile-contact-us";

@Component({
  selector: 'app-profile',
  imports: [ProfileHeader, ProfileContactInfo, ProfileOrders, ProfileContactUs],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

}
