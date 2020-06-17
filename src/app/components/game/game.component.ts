import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router'; 

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  isAdminBoard = false;

  constructor(private tokenStorageService: TokenStorageService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;

    }
  }

  logout() {
    console.log('test');
    this.tokenStorageService.signOut();
    this.router.navigate(['/']);
  }

}
