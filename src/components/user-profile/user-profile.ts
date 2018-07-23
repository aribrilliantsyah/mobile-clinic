import { Component, Input } from '@angular/core';
import { Profile } from "../../models/profile.interface";

/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.html'
})
export class UserProfileComponent {

  @Input() profile: Profile

}
