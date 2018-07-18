import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile.interface';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';

/**
 * Generated class for the IndexProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index-profile',
  templateUrl: 'index-profile.html',
})
export class IndexProfilePage {
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
    if(this.token){
      this.getProfile(this.token);
    }
    this.profile = this.navParams.get('profile');
  }

  getProfile(token: any){
    console.log(token)
    this.profileService.profileInfo(token).subscribe((data: Profile) => console.log(data), error => console.log(error))
  }

}
