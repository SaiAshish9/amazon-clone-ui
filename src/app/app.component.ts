import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amazon-clone-ui';

  constructor(private route:Router){}


  isNav(){
    return ['/'].includes(this.route.url)
  }

}
