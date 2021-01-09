import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsloggedin]',
})
export class IsloggedinDirective {
  constructor(el: ElementRef) {
    if (this.hide&&this.hide.length>0) {
      console.log(this.hide)
      el.nativeElement.style.display = 'none';
    }
  }

  @Input('appIsloggedin') hide: string;

}
