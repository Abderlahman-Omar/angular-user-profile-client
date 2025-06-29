import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private httpClient:HttpClient) { }
  getAllUsers():Observable<User[]>{
   return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }
  getUserById(id:number):Observable<User>{
    return this.httpClient.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
