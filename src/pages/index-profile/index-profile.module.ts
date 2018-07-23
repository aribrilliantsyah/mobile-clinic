import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexProfilePage } from './index-profile';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    IndexProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(IndexProfilePage),
    ComponentsModule
  ],
})
export class IndexProfilePageModule {}
