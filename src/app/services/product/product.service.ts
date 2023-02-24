import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constan';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = Constants.BaseUrl() + "product/";

  constructor(private http: HttpClient) { }

}
