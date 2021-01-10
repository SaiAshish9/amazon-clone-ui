import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-ebooks',
  templateUrl: './home-ebooks.component.html',
  styleUrls: ['./home-ebooks.component.scss']
})
export class HomeEbooksComponent implements OnInit {

  constructor(private service:HomedetailsService,private homeDetailsService: HomedetailsService) { }

  ngOnInit(): void {
  }

  fetchData(x){
    return this.homeDetailsService.fetchProducts(encodeURIComponent(x));
  }


  isLoggedIn(){
    return this.service.isLoggedIn()
  }

}
