import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  inpFocussed:any=false

  ngOnInit(): void {
  }

  toggleFocus(){
    this.inpFocussed=!this.inpFocussed
  }

}
