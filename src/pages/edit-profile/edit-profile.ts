import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoadingServiceProvider } from '../../providers/loading-service/loading-service';
import { Profile } from '../../models/profile.interface';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  private token: string;
  profile: Profile;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private profileService: ProfileServiceProvider,
    private auth: AuthServiceProvider,
    private loading: LoadingServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('EditProfilePage');
      this.token = this.navParams.get('token');
      if (this.token) {
        this.getProfile(this.token);
      }

      //middleware Auth 
      this.auth.AuthCheck(this.token, 'IndexProfilePage')
  }

  getProfile(token: string) {
    let loader = this.loading.show('loading ....');
    loader.present();
    this.profileService.profileInfo(token).subscribe(data => this.profile = data.data, error => console.log(error))
    loader.dismiss();
  }

  save(){

  }

}
