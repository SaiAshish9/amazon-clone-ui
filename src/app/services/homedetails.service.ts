import { CookieService } from 'ngx-cookie-service';
import { BASE_URL } from './../../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {
  constructor(private http: HttpClient,private cookieService:CookieService) {}

  private PUBLIC_URL = BASE_URL + 'public/home/';

  register(username, password, email) {
    console.log({ username, password, email });
    return this.http.post(BASE_URL + 'register', {
      username,
      email,
      password,
    });
  }

  fetchRecommendations(){
    return this.http.get(BASE_URL + 'private/user_recommendations')
  }


  isLoggedIn(){
    return this.cookieService.check('token')
  }

  getUsername(token){
    return this.http.get(BASE_URL + 'get-username?token='+token)
  }

  authenticate(email, password) {
    return this.http.post(BASE_URL + 'authenticate', {
      email,
      password,
    });
  }

  fetchCategories() {
    return this.http.get(this.PUBLIC_URL + 'categories');
  }

  fetchDiscoverItems() {
    return this.http.get(this.PUBLIC_URL + 'discoverItems');
  }

  fetchSellers() {
    return this.http.get(this.PUBLIC_URL + 'sellers');
  }

  fetchCareProducts() {
    return this.http.get(this.PUBLIC_URL + 'careProducts');
  }

  fetchProducts(title) {
    return this.http.get(this.PUBLIC_URL + 'products?title=' + title);
  }
}
