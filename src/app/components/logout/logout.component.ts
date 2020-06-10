import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-logout',
  template: `
  `,
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUser())
    {
      this.tokenStorage.signOut();
      window.location.reload();
    }
    else
    {
      this.router.navigate(['/']);
    }
  }

}
