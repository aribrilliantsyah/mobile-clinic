import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Profile } from '../../models/profile.interface';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { LoadingServiceProvider } from '../../providers/loading-service/loading-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = {
    username: '',
    password: '',
  } 
  page: string = '';
  validateErrors: any;
  profile: Profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private auth: AuthServiceProvider,
    private loading: LoadingServiceProvider, 
    private toast: ToastServiceProvider,
  ) { }

  ionViewDidLoad() {
    console.log('Login Page');
    this.page = this.navParams.get('page');
  }

  logIn(): void {
    let loader = this.loading.show('loading ....');
    loader.present();
    this.resetValidation('');
    this.auth.AuthUser(this.user).subscribe((data: Profile) => this.auth.authSuccess(data,this.page), error => this.getError(error))
    loader.dismiss();
  }

  getError(error: any) {
    if (error.status == 422) {
      this.validateErrors = error.json();
    } else if (error.status == 400) {
      this.toast.show(error.json().error);
    } else {
      this.toast.show('Server Error');
    }
  }

  resetValidation(type: string): void {
    if(this.validateErrors != undefined){
      switch (type) {
        case 'username':
          this.validateErrors.username = undefined;
          break;

        case 'password':
          this.validateErrors.password = undefined;
          break;

        default:
          this.validateErrors = undefined;
          break;
      }
    }
  }
}
