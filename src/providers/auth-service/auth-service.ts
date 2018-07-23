import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/add/observable/throw';

import { User } from '../../models/user.interface';
import { NavController, Events, App } from 'ionic-angular';

@Injectable()
export class AuthServiceProvider {

  private baseUrl: string = "http://clinic-api.apk";
  private authUrl: string = `${this.baseUrl}/v1/auth/login`;
  private navCtrl: NavController;
  private page: string;

  constructor(
    private http: Http,
    private events: Events,
    private app: App,
  ) {
    console.log('Auth Providers');
    this.navCtrl = app.getActiveNav();
  }

  //send user
  AuthUser(user: User){

    let formData:FormData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    
    return this.http.post(this.authUrl, formData)
      .do(this.logData)
      .map(this.extractData)
      .do(this.logData)
      .catch(this.handleError)
  }

  //middleware
  AuthCheck(token: string,page: string){
    if(token == undefined && page != undefined){
      this.redirectToLogin(page)
    }
  }


  authSuccess(data,page) {
    //redirect to defined page
    this.page = page ? page : 'HomePage';
    this.navCtrl.setRoot(this.page, {
      profile: data.data,
      token: data.token,
    });

    this.logUser(data.token, data.data)

  }

  authFailed(error: any) {
    return error;
  }

  logUser(token, data) {
    console.log('User Loged!')
    this.events.publish('user:loged', token, data);
  }

  logOut(){
    this.navCtrl.setRoot('HomePage')
  }

  redirectToLogin(page) {
    this.navCtrl.setRoot('LoginPage',{
      page: page,
    })
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
