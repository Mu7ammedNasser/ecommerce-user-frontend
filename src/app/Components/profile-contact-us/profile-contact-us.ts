import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-profile-contact-us',
  imports: [RouterLink],
  templateUrl: './profile-contact-us.html',
  styleUrl: './profile-contact-us.css',
})
export class ProfileContactUs {
  user = input<any>(null);
}
