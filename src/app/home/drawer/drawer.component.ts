import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor() { }


  OnInit(){
   this.visible = this.visible !== undefined
  }

  @Input('visible') visible = false;

  toggle(x){
    console.log(x)
    this.visible = x;
  }


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

  navbarOptions=[
    'Home',
    'Account',
    'Orders',
    'Buy Again',
    'Lists',
    'Your Browsing History',
    'Your Recommendations',
    'Customer Service'
  ]

  exploreOptions=[
    'Home',
    'Health & Household',
    'Books',
    'PC'
  ]

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
  }

}