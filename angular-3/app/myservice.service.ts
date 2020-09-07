import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from './usermodule';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  apiURL = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private __http:HttpClient) { }

  getUsers(){
    return this.__http.get<user[]>(this.apiURL)
  }
}
