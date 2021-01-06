import { BASE_URL } from './../../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {
  constructor(private http: HttpClient) {}

  private URL = BASE_URL + 'home/';

  fetchCategories() {
    return this.http.get(this.URL + 'categories');
  }

  fetchDiscoverItems() {
    return this.http.get(this.URL + 'discoverItems');
  }

  fetchSellers() {
    return this.http.get(this.URL + 'sellers');
  }

  fetchCareProducts() {
    return this.http.get(this.URL + 'careProducts');
  }

  fetchProducts(title) {
    return this.http.get(this.URL + 'products?title=' + title);
  }
}
