import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'smart-phone-menu',
  templateUrl: './smart-phone-menu.component.html',
  styleUrls: ['./smart-phone-menu.component.css']
})
export class SmartPhoneMenuComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (!this.tokenStorage.getUser())
    {
      this.router.navigate(['/']);
    }
  }

}
