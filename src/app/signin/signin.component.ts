import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
          this.emailorpn = decodeURIComponent(params['id'])
      },
      (err) => {}
    );
  }

  emailorpn;
  password;
  error_msg;

  onSubmit(f) {
    console.log(f.value);
    this.error_msg = 'Invalid Credentials';
    f.reset();
  }
}
