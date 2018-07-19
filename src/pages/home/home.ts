import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile.interface';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  profile: Profile;
  token: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private profileService: ProfileServiceProvider,
  ) { }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad IndexProfilePage');
    this.token = this.navParams.get('token');
    if (this.token) {
      this.getProfile(this.token);
    }
    this.profile = this.navParams.get('profile');
  }

  getProfile(token: any) {
    // console.log(token)
    this.profileService.profileInfo(token).subscribe((data: Profile) => console.log(data), error => console.log(error))
  }

}
