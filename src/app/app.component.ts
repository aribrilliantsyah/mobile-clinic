import { Component, ViewChild } from '@angular/core';
import { Nav , Platform, Events, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:string = 'HomePage';
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
      { title: 'Home', component: 'HomePage', icon: 'home' },
      { title: 'Profile', component: 'IndexProfilePage', icon: 'person' },
      { title: 'SampleForm', component: 'SamplePage', icon: 'add' },
    ];
  }

  getAuth(){
    this.events.subscribe('user:loged', (token, data) => {
      //get data from auth user Author: Argan (Ari Ganteng)
      this.token = token;
      this.info  = data;
    });
  }

  openPage(page) {
    //add token to page :v author : Ari
    this.nav.setRoot(page.component,{
      token:this.token,
    });
  }

  logIn(){
    this.nav.setRoot('LoginPage', {
      page: 'HomePage',
    });
  }


}

