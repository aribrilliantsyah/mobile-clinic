import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile.interface';

/**
 * Generated class for the ProfileEditFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profile-edit-form',
  templateUrl: 'profile-edit-form.html'
})
export class ProfileEditFormComponent {

  @Input() profile: Profile

}
