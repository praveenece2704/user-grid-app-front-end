import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { UserService } from 'src/app/core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let router: jasmine.SpyObj<Router>;

  const mockUser = 
      {
        id: 2,
        firstName: "Michael",
        lastName: "Williams",
        maidenName: "",
        age: 35,
        gender: "male",
        email: "michael.williams@x.dummyjson.com",
        phone: "+49 258-627-6644",
        username: "michaelw",
        password: "michaelwpass",
        birthDate: "1989-8-10",
        image: "https://dummyjson.com/icon/michaelw/128",
        bloodGroup: "B+",
        height: 186.22,
        weight: 76.32,
        eyeColor: "Red",
        hair: {
          color: "Green",
          type: "Straight",
        },
        ip: "12.13.116.142",
        address: {
          address: "385 Fifth Street",
          city: "Houston",
          state: "Alabama",
          stateCode: "AL",
          postalCode: "38807",
          coordinates: {
            lat: 22.815468,
            lng: 115.608581,
          },
          country: "United States",
        },
        macAddress: "79:15:78:99:60:aa",
        university: "Ohio State University",
        bank: {
          cardExpire: "02/27",
          cardNumber: "6737807858721625",
          cardType: "Elo",
          currency: "SEK",
          iban: "83IDT77FWYLCJVR8ISDACFH0",
        },
        company: {
          department: "Support",
          name: "Spinka - Dickinson",
          title: "Support Specialist",
          address: {
            address: "395 Main Street",
            city: "Los Angeles",
            state: "New Hampshire",
            stateCode: "NH",
            postalCode: "73442",
            coordinates: {
              lat: 79.098326,
              lng: -119.624845,
            },
            country: "United States",
          },
        },
        ein: "912-602",
        ssn: "108-953-962",
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/97.0.1072.76 Safari/537.36",
        crypto: {
          coin: "Bitcoin",
          wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
          network: "Ethereum (ERC20)",
        },
        role: "admin",
      };
  beforeEach(() => {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['getUserById']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy },
        { 
          provide: ActivatedRoute, 
          useValue: { snapshot: { paramMap: new Map([['id', '1']]) } }
        },
      ],
    });

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load user details on init', () => {
    userService.getUserById.and.returnValue(of(mockUser));

    fixture.detectChanges();

    expect(component.user).toEqual(mockUser);
    expect(component.errorMessage).toBeUndefined();
  });

  it('should handle error if user service fails', () => {
    userService.getUserById.and.returnValue(throwError('Error occurred'));

    fixture.detectChanges();

    expect(component.user).toBeUndefined();
    expect(component.errorMessage).toBe('Failed to load user details. Please try again later.');
  });

  it('should navigate to home on goBack()', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});
