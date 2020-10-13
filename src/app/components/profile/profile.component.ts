import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  public user: any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {

    this.user = this.tokenStorageService.getUser();

  }

}
