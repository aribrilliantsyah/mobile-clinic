import { Component, ViewChild } from '@angular/core';
import { Nav , Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private baseUrl: string = 'http://clinic-api.apk';
  private basePhotoUrl: string = `${this.baseUrl}/v1/profile/foto/`;
  public photoUrl: string;

  rootPage:string = 'LoginPage';
  pages: Array<{ title: string, component: string, icon:string }>;
  
  token : string;
  info  : any;

  constructor(
    private platform: Platform, 
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private events: Events,
  ) {
    this.initializeApp();
    this.getAuth();
    this.initPages();
    console.log('img',this.photoUrl)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  initPages(){
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', icon: 'ion-home' },
      { title: 'Profile', component: 'IndexProfilePage', icon: 'ion-user' },
    ];
  }

  getAuth(){
    this.events.subscribe('user:loged', (token, data) => {
      //get data from auth user
      this.token = token;
      this.info  = data;
      this.photoUrl = `${this.basePhotoUrl}${data.uid}`;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

