import { Component, input } from '@angular/core';

@Component({
  selector: 'app-profile-contact-info',
  imports: [],
  templateUrl: './profile-contact-info.html',
  styleUrl: './profile-contact-info.css',
})
export class ProfileContactInfo {
  user = input<any>(null);
}
