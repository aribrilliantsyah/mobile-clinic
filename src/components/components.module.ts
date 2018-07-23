import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile';
import { IonicModule } from 'ionic-angular';
import { ProfileEditFormComponent } from './profile-edit-form/profile-edit-form';
@NgModule({
	declarations: [UserProfileComponent,
    ProfileEditFormComponent],
	imports: [IonicModule],
	exports: [UserProfileComponent,
    ProfileEditFormComponent]
})
export class ComponentsModule {}
