import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  inpFocussed:any=false

  ngOnInit(): void {
    this.hideDropDown = this.hideDropDown !== undefined
  }
  

  @Input('hideDropDown') hideDropDown:boolean;

  toggleFocus(){
    this.inpFocussed=!this.inpFocussed
  }

}
