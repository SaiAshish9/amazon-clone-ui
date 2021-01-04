import { HomedetailsService } from './../services/homedetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeDS:HomedetailsService) { }

  categories:any[]=[];

  ngOnInit(): void {
    this.homeDS.fetchCategories().subscribe((data:any)=>{
      this.categories=data
    },err=>{
      console.log(err)
    })
  }


  numArr(n){
   return Array(n);
  }

}
