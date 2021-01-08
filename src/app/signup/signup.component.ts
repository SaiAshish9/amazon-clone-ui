import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as bcrypt from 'bcryptjs'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private route:Router) {}

  ngOnInit(): void {}


  error_msg;

  onSubmit(f) {
    console.log(f.value);
    this.route.navigate(['signin',{
      id:encodeURIComponent(f.value.email)
      // id: bcrypt.hashSync(f.value.email,10)
    }])
    this.error_msg = 'Invalid Credentials';
    f.reset();
  }
}
