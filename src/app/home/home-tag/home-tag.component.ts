import { HomedetailsService } from './../../services/homedetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-tag',
  templateUrl: './home-tag.component.html',
  styleUrls: ['./home-tag.component.scss'],
})
export class HomeTagComponent implements OnInit {
  constructor(private homeDS:HomedetailsService) {}

  categories: any[] = [];

  @ViewChild('carousel') slider;

  ngOnInit(): void {
    this.homeDS.fetchCategories().subscribe((data:any)=>{
      this.categories=data
    },err=>{
      console.log(err)
    })
  }

  next() {
    this.slider.next();
  }

  prev() {
    this.slider.pre();
  }

  images = [
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg',
  ];
}
