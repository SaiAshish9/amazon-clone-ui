import { Component, OnInit } from '@angular/core';
import { HomedetailsService } from '../services/homedetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeDetailsService: HomedetailsService) {}

  deal: any;

  numArr(x){
    return Array(x)
  }

  departments=[
    {
      title:"Beauty",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/all_beauty2x._SX400_CB485977874_.png"
    },
    {
      title:"Home and Kitchen",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/furniture2x._SX400_CB485979662_.png"
    },
    {
      title:"Sports and Outdoors",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/team_sports2x._SX400_CB485977166_.png"
    },
    {
      title:"Electronics",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/headphones2x._SX400_CB485980478_.png"
    },
    {
      title:"Outdoor Clothing",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/outdoor_clothing2x._SX400_CB485980995_.png"
    },
    {
      title:"Pet Supplies",
      image:"https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/pet_supplies2x._SX400_CB485978664_.png"
    },
  ]


  fetchData(x) {
    return this.homeDetailsService.fetchProducts(encodeURIComponent(x));
  }

  fetchSellers() {
    return this.fetchData('Amazon Top Sellers');
  }

  fetchCareProducts() {
    return this.fetchData('Top Beauty & Personal Care products');
  }

  ngOnInit(): void {
    this.homeDetailsService.fetchBestDeal().subscribe(
      (data: any) => {
        this.deal = data[0];
      },
      (err) => {}
    );
  }

  scroll(){
    window.scrollTo(0, 0)
  }

  isLoggedIn(){
    this.homeDetailsService.isLoggedIn()
  }
}
