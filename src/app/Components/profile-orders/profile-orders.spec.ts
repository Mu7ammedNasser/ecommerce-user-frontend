import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOrders } from './profile-orders';

describe('ProfileOrders', () => {
  let component: ProfileOrders;
  let fixture: ComponentFixture<ProfileOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileOrders);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
