import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
environment
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private base_url_auth = environment.base_url_auth;

  constructor(
    private http : HttpClient
  ) {


   }

  loginUsuario(data : {usernam: string, password : string}){
    return this.http.post(`${this.base_url_auth}generate-token`,data);
  }
}
