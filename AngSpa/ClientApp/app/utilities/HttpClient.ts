import {Injectable,Inject, Component} from '@angular/core';
import {Http, Headers} from '@angular/http'; 
import { RequestOptions } from '@angular/http/src/base_request_options';
  
@Injectable()
export class HttpClient  {
  
  private baseUrl :string = "";
  private token :string = "";
  private http : Http;

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) 
  {
    debugger;
    this.baseUrl = baseUrl;
    this.http = http;
    this.http.get(this.baseUrl+'/api/token?username=Alper&password=Alper', { 
                }).subscribe(result => {
                    this.token = result.json().access_token;  
                }, error => console.error(error));
  }

  createAuthorizationHeader(headers: Headers) {  
    headers.append('Authorization', 'bearer '+this.token);  
  }

  get(url:any) {
    debugger;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url:string, data:any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
