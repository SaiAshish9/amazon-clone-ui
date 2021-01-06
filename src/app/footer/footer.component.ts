import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  data1 = [
    {
      title: 'Get to Know Us',
      contents: [
        'Careers',
        'Blog',
        'About Amazon',
        'Investor Relations',
        'Amazon Devices',
        'Amazon Tours',
      ],
    },
    {
      title: 'Make Money with Us',
      contents: [
        'Sell products on Amazon',
        'Sell apps on Amazon',
        'Become an Affiliate',
        'Advertise Your Products',
        'Self-Publish with Us',
        'Host an Amazon Hub',
      ],
    },
    {
      title: 'Amazon Payment Products',
      contents: [
        'Amazon Business Card',
        'Shop with Points',
        'Reload Your Balance',
        'Amazon Currency Converter',
      ],
    },
    {
      title: 'Let Us Help You',
      contents: [
        'Amazon and COVID-19',
        'Your Account',
        'Your Orders',
        'Shipping Rates & Policies',
        'Returns & Replacements',
        'Manage Your Content and Devices',
        'Amazon Assistant',
        'Help',
      ],
    },
  ];

  genArray(n){
    return Array(n)
  }

  ngOnInit(): void {}
}
