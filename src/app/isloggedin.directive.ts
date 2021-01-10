import { CookieService } from 'ngx-cookie-service';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsloggedin]',
})
export class IsloggedinDirective {
  constructor(el: ElementRef,cookieService:CookieService) {
      if(cookieService.check('token') && this.display=='false' )
      el.nativeElement.style.display = 'none';
  }

  @Input('display') display:string;

}
