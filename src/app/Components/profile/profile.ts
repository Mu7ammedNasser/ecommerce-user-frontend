import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ProfileHeader } from '../profile-header/profile-header';
import { ProfileContactInfo } from '../profile-contact-info/profile-contact-info';
import { ProfileOrders } from '../profile-orders/profile-orders';
import { ProfileContactUs } from '../profile-contact-us/profile-contact-us';
import { Auth } from '../../Core/Services/auth';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    ProfileHeader,
    ProfileContactInfo,
    ProfileOrders,
    ProfileContactUs,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Profile implements OnInit {
  private authService = inject(Auth);

  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;

  user = signal<any>(null);
  errorMsg = signal<string>('');
  isLoading = signal<boolean>(false);

  profileForm: FormGroup = new FormGroup({
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.pattern(/^\+?[0-9]{10,15}$/)]),
    country: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
    city: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.pattern(/^[a-zA-Z\s'-]+$/),
    ]),
  });

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

  openEditModal() {
    const user = this.user();

    if (user) {
      this.profileForm.patchValue({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        country: user.country,
        city: user.city,
      });
    }

    this.dialogRef.nativeElement.showModal();
  }

  closeDialog() {
    this.dialogRef.nativeElement.close();
  }

  saveProfile() {
    this.errorMsg.set('');

    if (this.profileForm.valid) {
      this.isLoading.set(true);

      const currentUser = this.user();

      if (!currentUser?.id) {
        this.errorMsg.set('User ID not found');
        this.isLoading.set(false);
        return;
      }

      const updatedUser = {
        ...currentUser,
        ...this.profileForm.value,
      };

      this.authService.updateUser(currentUser.id, updatedUser).subscribe({
        next: (response: any) => {
          this.user.set(response);

          localStorage.setItem('user', JSON.stringify(response));

          this.isLoading.set(false);
          this.closeDialog();
        },
        error: (err) => {
          console.error(err);
          this.errorMsg.set('Failed to update user');
          this.isLoading.set(false);
        },
      });
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
