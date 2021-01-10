import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfooter',
  templateUrl: './mfooter.component.html',
  styleUrls: ['./mfooter.component.scss']
})
export class MfooterComponent implements OnInit {

  constructor() { }

  options=[
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
  ]


  ngOnInit(): void {
  }

}
