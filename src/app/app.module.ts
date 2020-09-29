import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {authInterceptorProviders} from './helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameEventComponent } from './components/game-event/game-event.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import {InventoryService} from './services/inventory.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import {TestService} from './test.service';
import { SmartPhoneComponent } from './components/smart-phone/smart-phone.component';
import { SmartWatchComponent } from './components/smart-watch/smart-watch.component';
import { SmartPhoneMenuComponent } from './components/smart-phone-menu/smart-phone-menu.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './components/logout/logout.component';
import { ShopComponent } from './components/shop/shop.component';
import { EventsComponent } from './components/events/events.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AdminComponent } from './components/admin/admin.component';
import { GameComponent } from './components/game/game.component';
import { UsersComponent } from './components/users/users.component';
import { ActivityDefinitionsComponent } from './components/activity-definitions/activity-definitions.component';
import { CreateDefinitionComponent } from './components/activity-definitions/create-definition/create-definition.component';
import { DefinitionDetailsComponent } from './components/activity-definitions/definition-details/definition-details.component';
import { EditDefinitionComponent } from './components/activity-definitions/edit-definition/edit-definition.component';
import { SharedModule } from './shared/shared.module';
import { ProfileAccountViewComponent } from './components/profile/profile-account-view/profile-account-view.component';
import { ProfileGameViewComponent } from './components/profile/profile-game-view/profile-game-view.component';

const ROUTES = [
  {path:'home',component : HomeComponent},
  {path:'',redirectTo: 'home', pathMatch : 'full'}
  
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameEventComponent,
    InventoryComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    SmartPhoneComponent,
    SmartWatchComponent,
    SmartPhoneMenuComponent,
    LogoutComponent,
    ShopComponent,
    EventsComponent,
    ActivitiesComponent,
    AdminComponent,
    GameComponent,
    UsersComponent,
    ActivityDefinitionsComponent,
    CreateDefinitionComponent,
    DefinitionDetailsComponent,
    EditDefinitionComponent,
    ProfileAccountViewComponent,
    ProfileGameViewComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [InventoryService, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
