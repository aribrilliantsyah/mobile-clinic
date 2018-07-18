import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingServiceProvider {

  constructor(private loadingCtrl: LoadingController) {

  }
  show(message: string) {
    return this.loadingCtrl.create({
      content: message,
    });

  }


}
