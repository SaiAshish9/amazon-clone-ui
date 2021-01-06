import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-bottom',
  templateUrl: './categories-bottom.component.html',
  styleUrls: ['./categories-bottom.component.scss'],
})
export class CategoriesBottomComponent implements OnInit {
  constructor(private homeDS: HomedetailsService) {}

  categories: any = [];

  ngOnInit(): void {
    this.homeDS.fetchCategories().subscribe(
      (data: any) => {
        this.categories = data;
      },
      (err) => {}
    );
  }
}
