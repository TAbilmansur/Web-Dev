import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class Service
{
  constructor(private http: HttpClient) {};

  address = 'http://127.0.0.1:8000/api';

  GetCategories(): Observable<any>
  {
    return this.http.get<any>(this.address+'/categories');
  }

  GetProductsByCategory(category:string): Observable<any>
  {
    return this.http.get<any>(this.address+"/categories/"+category+'/products');
  }
}