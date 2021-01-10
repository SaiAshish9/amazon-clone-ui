import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { HomedetailsService } from 'src/app/services/homedetails.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class HomeCategoriesComponent implements OnInit {

  constructor(private homeDS:HomedetailsService,private cookieService:CookieService) { }

  categories:any[]=[];

  name

  recommendations:any=[]



  ngOnInit(): void {
    this.homeDS.fetchCategories().subscribe((data:any)=>{
      this.categories=data
    },err=>{
      console.log(err)
    })
    if(this.cookieService.check('token'))
    this.homeDS.getUsername(this.cookieService.get('token')).subscribe(
      (data: any) => {
        this.name = data.username;
      },
      (err) => {
        console.log(err);
      }
    );
    if(this.isLoggedIn()){
      this.homeDS.fetchRecommendations().subscribe((data:any)=>{
        this.recommendations=data
      })
    }
  }

  isLoggedIn(){
    return this.homeDS.isLoggedIn()
  }


  numArr(n){
   return Array(n);
  }

}
