import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user;
  public test = true;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getUser();
    console.log('user state is ' + this.user.isActiveAccount);
  }

  getUser() {

    this.user = this.tokenStorageService.getUser();

  }

}
