import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../../core/models/product';

@Injectable({
    providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public getProductsFromDB(): Observable<any>{
    return this.http.get('./assets/json/data.json');
  }

  /* public getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typecode.com/todos/todos');
  }  */
}
