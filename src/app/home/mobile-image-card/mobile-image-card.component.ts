import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-image-card',
  templateUrl: './mobile-image-card.component.html',
  styleUrls: ['./mobile-image-card.component.scss'],
})
export class MobileImageCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.fn.subscribe(
      (data: any) => {
        this.data = data[0].images;
        this.title = data[0].name
      },
      (err) => {}
    );
    this.showFour = this.showFour !== undefined
    this.descAvailable = this.descAvailable !== undefined
  }

  data: any[] = [];
  title:any
  @Input('descAvailable') descAvailable:boolean
  @Input('fn') fn;
  @Input('showFour') showFour:boolean;

  numArr(n) {
    return Array(n);
  }
}
