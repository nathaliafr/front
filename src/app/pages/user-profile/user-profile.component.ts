import { Component, OnInit } from '@angular/core';
import {UseExistingWebDriver} from 'protractor/built/driverProviders';
import {UserProfileService} from './user-profile.service';
import {User} from './user.model';
import {ActivatedRoute} from '@angular/router';
import {identifierModuleUrl} from '@angular/compiler';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  usuario: User;
  constructor(private userProfileService: UserProfileService,
              private route: ActivatedRoute) {
/*    this.userProfileService.getUser().then((user) => {
      console.log(user);
      this.usuario = user;
  });*/
    this.userProfileService.getUsuarios().subscribe(user => {
      this.usuario = user;
      console.log(this.usuario);
    });
  }

  ngOnInit() {
    this.getUsuario();
  }
  getUsuario(): void {
    const id = 1; /*+this.route.snapshot.paramMap.get('id');*/
    console.log(id);
    this.userProfileService.getUsuario(id).subscribe(user => {
    this.usuario = user;
    console.log(this.usuario);
    });
  }
  getUsuarios() {

  }
}
