import { HomedetailsService } from 'src/app/services/homedetails.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-discover',
  templateUrl: './home-discover.component.html',
  styleUrls: ['./home-discover.component.scss'],
})
export class HomeDiscoverComponent implements OnInit {
  constructor(private homeDetailsService: HomedetailsService) {}

  data: any[] = [];
  hovered = false;

  @ViewChild('scroll') scrollbar;

  ngOnInit(): void {
    this.homeDetailsService.fetchDiscoverItems().subscribe(
      (data: any) => {
        this.data = data;
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
    this.scrollbar.nativeElement.scrollLeft += 100;
  }

  scrollLeft() {
    this.toggleFocus();
    this.scrollbar.nativeElement.scrollLeft -= 100;
  }
}
