import { Router } from '@angular/router';
import { HomedetailsService } from 'src/app/services/homedetails.service';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private service: HomedetailsService,
    private cookieService: CookieService,
    private route: Router
  ) {}

  count = 0;
  name = '';
  hovered = false;
  lists = [
    'Create a List',
    'Find a List or Registry',
    'AmazonSmile Charity Lists',
  ];

  accounts = [
    'Account',
    'Orders',
    'Recommendations',
    'Browsing History',
    'Watchlist',
    'Video Purchases & Rentals',
    'Kindle Unlimited',
    'Content & Devices',
    'Subscribe & Save Items',
    'Memberships & Subscriptions',
    'Music Library',
  ];

  categories = [
    'Whole Foods',
    'Pharmacy',
    'Lists',
    'Deals',
    'Video',
    'Music',
    'Best Sellers',
    'New Releases',
    'Amazon Basics',
    'Gift Cards',
    'Home',
    'Health & Household',
    'Books',
    'PC',
  ];

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.service.getUsername(this.cookieService.get('token')).subscribe(
        (data: any) => {
          this.name = data.username;
          this.count = 9;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.name = 'Sign in';
    }
  }

  signOut() {
    this.service.getEmail(this.cookieService.get('token')).subscribe(
      (data: any) => {
        this.cookieService.delete('token');
        this.route.navigate([
          'signin',
          {
            id: encodeURIComponent(data.email),
          },
        ]);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }
}
