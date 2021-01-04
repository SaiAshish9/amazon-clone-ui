import { BASE_URL } from './../../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomedetailsService {
  constructor(private http:HttpClient) {}

  fetchCategories(){
    return this.http.get(BASE_URL+'home/categories');
  }

}
