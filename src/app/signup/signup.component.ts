import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private route: Router, private service: HomedetailsService) {}

  ngOnInit(): void {}

  error_msg;

  @ViewChild('#f') f;

  onSubmit({ value: { name, email, password } }) {
    this.service.register(name, password, email).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate([
          'signin',
          {
            id: encodeURIComponent(email),
          },
        ]);
      },
      (err) => {
        console.log(err);
        if ((err.err = 'already exits')) {
          this.error_msg = 'User Already Exists';
        } else {
          this.error_msg = 'Something went wrong!';
        }
      }
    );
  }
}
