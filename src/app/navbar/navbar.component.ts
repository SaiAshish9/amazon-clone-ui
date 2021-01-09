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
    private cookieService: CookieService
  ) {}

  count = 0;
  name = '';

  ngOnInit(): void {
    if (this.cookieService.check('token')) {
      this.service.getUsername(this.cookieService.get('token')).subscribe(
        (data: any) => {
          this.name = data.username;
        },
        (err) => {
          console.log(err);
        }
      );
    }else{
      this.name='Sign in'
    }
  }
}
