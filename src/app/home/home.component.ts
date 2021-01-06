import { Component, OnInit } from '@angular/core';
import { HomedetailsService } from '../services/homedetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeDetailsService: HomedetailsService) {}

  
  fetchData(x){
    return this.homeDetailsService.fetchProducts(encodeURIComponent(x));
  }

  fetchSellers() {
    return this.fetchData('Amazon Top Sellers');
  }

  fetchCareProducts(){
    return this.fetchData('Top Beauty & Personal Care products');
  }

  ngOnInit(): void {}
}
