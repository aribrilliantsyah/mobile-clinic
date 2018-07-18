import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user.interface';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { Profile } from '../../models/profile.interface';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { LoadingServiceProvider } from '../../providers/loading-service/loading-service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  validateErrors: any;
  profile: Profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    private auth: AuthServiceProvider,
    private toast: ToastServiceProvider,
    private loading: LoadingServiceProvider, 
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(): void {
    let loader = this.loading.show('loading ....');
    loader.present();
    this.resetValidation('');
    this.auth.AuthUser(this.user)
      .subscribe((data: Profile) => this.authSuccess(data), error => this.authFailed(error));
    loader.dismiss();
  }

  authFailed(error: any){
    console.log(error)
    if(error.status == 422){
      this.validateErrors = error.json();  
    }else if(error.status == 400){
      this.toast.show(error.json().error);
    }else{
      console.log(error.json());
      this.toast.show('Server Error');
    }
  }

  authSuccess(data){
    // console.log(data)
    this.navCtrl.push('IndexProfilePage',{
      profile : data.data,
      token   : data.token,
    });
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
    // this.validateErrors = undefined;
  }
}
