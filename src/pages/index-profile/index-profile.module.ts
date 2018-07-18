import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexProfilePage } from './index-profile';

@NgModule({
  declarations: [
    IndexProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(IndexProfilePage),
  ],
})
export class IndexProfilePageModule {}
