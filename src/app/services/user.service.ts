import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  userLogin() {
    return this.http.get('/assets/users.json');
    // return this.userslist;
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
  getMyToken(){
    return localStorage.getItem('token');
  }
}

