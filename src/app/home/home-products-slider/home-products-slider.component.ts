import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HomedetailsService } from 'src/app/services/homedetails.service';

@Component({
  selector: 'app-home-products-slider',
  templateUrl: './home-products-slider.component.html',
  styleUrls: ['./home-products-slider.component.scss'],
})
export class HomeProductsSliderComponent implements OnInit {
  constructor(private homeDetailsService: HomedetailsService) {}

  data: any[] = [];
  hovered = false;
  displayTag= false;

  @Input('fn') fn: any;
  @ViewChild('scroll') scrollbar;
  @Input('title') title: string = '';
  @Input('link') link: string = 'Shop now';

  ngOnInit(): void {
    this.fn.subscribe(
      (data: any) => {
        
        if(this.link){
         this.displayTag=true
        }
        this.title = data[0]['name'];
        this.data = data[0]['images'];
      },
      (err) => {}
    );
  }

  toggleFocus() {
    this.scrollbar.nativeElement.style.overflowX = 'scroll';
  }

  focus() {
    this.hovered = true;
    this.scrollbar.nativeElement.style.overflowX = 'scroll';
  }

  leave() {
    this.hovered = false;
    this.scrollbar.nativeElement.style.overflow = 'hidden';
  }

  scrollRight() {
    this.toggleFocus();
    this.scrollbar.nativeElement.scrollLeft += 1000;
  }

  scrollLeft() {
    this.toggleFocus();
    this.scrollbar.nativeElement.scrollLeft -= 1000;
  }
}
