import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  imports: [CommonModule],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.css',
})
export class ProfileHeader {
  user = input<any>(null);

  @Output() editClicked = new EventEmitter<void>();

  onEdit() {
    this.editClicked.emit();
  }
}
