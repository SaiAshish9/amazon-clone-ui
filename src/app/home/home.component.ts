import { Component, OnInit } from '@angular/core';
import { HomedetailsService } from '../services/homedetails.service';
import * as moment from 'moment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private homeDetailsService: HomedetailsService) {}

  deal: any;
  date: any;

  numArr(x) {
    return Array(x);
  }

  departments = [
    {
      title: 'Beauty',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/all_beauty2x._SX400_CB485977874_.png',
    },
    {
      title: 'Home and Kitchen',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/furniture2x._SX400_CB485979662_.png',
    },
    {
      title: 'Sports and Outdoors',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/team_sports2x._SX400_CB485977166_.png',
    },
    {
      title: 'Electronics',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/headphones2x._SX400_CB485980478_.png',
    },
    {
      title: 'Outdoor Clothing',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/outdoor_clothing2x._SX400_CB485980995_.png',
    },
    {
      title: 'Pet Supplies',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/gateway/grid/test/pet_supplies2x._SX400_CB485978664_.png',
    },
  ];

  fetchData(x) {
    return this.homeDetailsService.fetchProducts(encodeURIComponent(x));
  }

  fetchSellers() {
    return this.fetchData('Amazon Top Sellers');
  }

  fetchCareProducts() {
    return this.fetchData('Top Beauty & Personal Care products');
  }

  Timer(duration) 
  {
     var myInterval = setInterval(function () {
          var subtract = duration.subtract(1, 'seconds');
          var formatted = moment(subtract).format('HH:mm:ss');
          if(formatted === '00:00:00'){
              clearInterval(myInterval);
          }  
          this.date = formatted
          document.getElementById('date').innerHTML = "Ends in "+this.date
      }, 1000);
  }
  

  ngOnInit(): void {
    this.homeDetailsService.fetchBestDeal().subscribe(
      (data: any) => {
        this.deal = data[0];
        var days = data[0].expiryDays * 24 -1;
        var fiveMinutes = moment().hours(days).minutes(59).seconds(59);
        this.Timer(fiveMinutes)
      },
      (err) => {}
    );
  }

  scroll() {
    window.scrollTo(0, 0);
  }

  isLoggedIn() {
    return this.homeDetailsService.isLoggedIn();
  }
}
