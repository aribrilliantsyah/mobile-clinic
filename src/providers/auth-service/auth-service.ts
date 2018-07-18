import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { Profile } from '../../models/profile.interface';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private baseUrl: string = "http://clinic-api.apk";
  private authUrl: string = `${this.baseUrl}/v1/auth/login`;

  constructor(private http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  AuthUser(user: User): Observable<Profile>{

    let formData:FormData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    
    return this.http.post(this.authUrl, formData)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError)
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
