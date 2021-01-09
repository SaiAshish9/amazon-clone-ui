import { CookieService } from 'ngx-cookie-service';
import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HomedetailsService,
    private cookieService:CookieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        if (params['id']) this.emailorpn = decodeURIComponent(params['id']);
      },
      (err) => {}
    );
  }

  emailorpn;
  password;
  error_msg;

  onSubmit(f) {
    this.service.authenticate(this.emailorpn, this.password).subscribe(
      (data:any) => {
        this.cookieService.set('token',data.token);
        this.router.navigate(['/']);
        f.reset();
      },
      (err) => {
        console.log(err);
        this.error_msg = 'Invalid Credentials';
      }
    );
  }
}
