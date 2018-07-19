import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/throw';
/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  private baseUrl: string = "http://clinic-api.apk";
  private profileUrl: string = `${this.baseUrl}/v1/profile`;
  token: any;

  constructor(public http: Http) {
    console.log('Hello ProfileServiceProvider Provider');
  }

  profileInfo(token: string){
    const headers = this.headers(token);

    const options = new RequestOptions({ headers: headers});


    return this.http.get(this.profileUrl, options)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError)
  }

  headers(token: string){
    this.token = `Bearer ${token}`;

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', this.token);
    
    return headers;

  }

  private handleError(error: Response | any) {
    return Observable.throw(error)
  }

  private extractData(response: Response) {
    return response.json();
  }

  private logData(response: Response) {
    console.log(response)
  }

}
