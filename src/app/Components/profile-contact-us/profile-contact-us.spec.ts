import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactUs } from './profile-contact-us';

describe('ProfileContactUs', () => {
  let component: ProfileContactUs;
  let fixture: ComponentFixture<ProfileContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContactUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
