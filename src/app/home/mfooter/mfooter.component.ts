import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfooter',
  templateUrl: './mfooter.component.html',
  styleUrls: ['./mfooter.component.scss'],
})
export class MfooterComponent implements OnInit {
  constructor(
    private service: HomedetailsService,
    private cookieService: CookieService,
    private route:Router
  ) {}

  isLoggedIn() {
    return this.service.isLoggedIn();
  }

  options = [
    'Amazon.com',
    'Your Lists',
    'Find a Gift',
    'Browsing History',
    'Your Recommendations',
    'Your Orders',
    'Gift Cards & Registry',
    'Your Account',
    'Sell products on Amazon ',
    'Returns',
    'Customer Service',
  ];

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

  ngOnInit(): void {}
}
