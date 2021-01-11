import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  constructor(private route:Router) { }


  @Output() openDrawer = new EventEmitter();

  openD(){
    this.openDrawer.emit()
  }


  options=[
    "Today's Deals",
    "Customer Service",
    "Gift Cards",
    "Sell",
    "Registry"
  ]

  ngOnInit(): void {
  }


  

}
