import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../user-profile/user-profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
  }
}
