import { HomedetailsService } from './homedetails.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class RouteGuardService implements CanActivate{
   
    constructor(
        private router:Router,
        private service:HomedetailsService
    ){}
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.service.isLoggedIn()){
            return true;
        }
        this.router.navigate(['/'])
        return false
    }

}