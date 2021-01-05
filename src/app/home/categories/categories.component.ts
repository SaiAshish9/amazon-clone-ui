import { Component, OnInit } from '@angular/core';
import { HomedetailsService } from 'src/app/services/homedetails.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

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
