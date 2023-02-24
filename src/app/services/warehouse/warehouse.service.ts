import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constan';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  baseUrl: string = Constants.BaseUrl() + "warehouse/";

  constructor(private http: HttpClient) { }
}
