import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseurl = 'https://reqres.in/';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  login(LoginDTO) {
    return this.http.post(baseurl + 'api/login', LoginDTO);
  }
}
