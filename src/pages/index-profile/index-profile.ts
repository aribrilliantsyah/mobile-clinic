import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile.interface';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingServiceProvider } from '../../providers/loading-service/loading-service';

@IonicPage()
@Component({
  selector: 'page-index-profile',
  templateUrl: 'index-profile.html',
})
export class IndexProfilePage {
  profile: Profile;
  private token: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private profileService: ProfileServiceProvider,
    private auth: AuthServiceProvider,
    private loading: LoadingServiceProvider 
  ) { 
  }

  ionViewDidLoad() {
    this.token = this.navParams.get('token');
    if(this.token){
      this.getProfile(this.token);
    }
    this.profile = this.navParams.get('profile');

    //middleware Auth 
    this.auth.AuthCheck(this.token,'IndexProfilePage')
  }

  getProfile(token: string){
    let loader = this.loading.show('loading ....');
    loader.present();
    this.profileService.profileInfo(token).subscribe(data => this.profile = data.data, error => console.log(error))
    loader.dismiss();
  }

  edit(){
    this.navCtrl.push('EditProfilePage',{
      token: this.token,
    })
  }

}
