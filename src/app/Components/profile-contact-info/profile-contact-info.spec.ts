import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactInfo } from './profile-contact-info';

describe('ProfileContactInfo', () => {
  let component: ProfileContactInfo;
  let fixture: ComponentFixture<ProfileContactInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileContactInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContactInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
