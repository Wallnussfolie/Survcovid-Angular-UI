import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './services/token-storage.service';
import {ActivatedRoute, RouterOutlet} from '@angular/router'; 
import { slideInAnimation } from './shared/animations/SlideInAnimation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation,
  ]
})
export class AppComponent implements OnInit{

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username: string;
  isAdminBoard = false;

  title = 'Survcovid-Angular-UI';

  constructor(private tokenStorageService: TokenStorageService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;

      if (this.route.outlet == "admin")
      {
        this.isAdminBoard = true;
      }

    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  /**
   * This method detects when a route change happens. 
   * 
   * @param outlet 
   */
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
