import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {InventoryComponent} from './components/inventory/inventory.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {BoardAdminComponent} from './components/board-admin/board-admin.component';
import {LogoutComponent} from './components/logout/logout.component';
import { ShopComponent } from './components/shop/shop.component';
import {ProfileComponent} from "./components/profile/profile.component";
import { EventsComponent } from './components/events/events.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AdminComponent } from './components/admin/admin.component';
import { GameComponent } from './components/game/game.component';
import { UsersComponent } from './components/users/users.component';
import { SmartPhoneMenuComponent } from './components/smart-phone-menu/smart-phone-menu.component';
import { ActivityDefinitionsComponent } from './components/activity-definitions/activity-definitions.component';
import { CreateDefinitionComponent}  from './components/activity-definitions/create-definition/create-definition.component';
import { DefinitionDetailsComponent } from './components/activity-definitions/definition-details/definition-details.component';
import { EditDefinitionComponent } from './components/activity-definitions/edit-definition/edit-definition.component';
import { AdminGuard } from './admin.guard';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { EventDefinitionComponent } from './components/event-definition/event-definition.component';
import { CreateEventComponent } from './components/event-definition/create-event/create-event.component';
import { ChangePasswordDialogComponent } from './components/profile/change-password-dialog/change-password-dialog.component';

const routes: Routes = [

  { path: '',
    component: GameComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {path : 'smart-phone-menu',component:SmartPhoneMenuComponent},
      {
        path: 'myInventory',
        component: InventoryComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'events',
        component: EventsComponent
      },
      {
        path: 'activities',
        component: ActivitiesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'profile/changePassword',
        component: ChangePasswordDialogComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'activities',
        component: ActivityDefinitionsComponent
      },
      {
        path: 'activities/create',
        component: CreateDefinitionComponent
      },
      {
        path: 'activities/:id',
        component: DefinitionDetailsComponent
      },
      {
        path: 'activities/edit/:id',
        component: EditDefinitionComponent
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent
      },
      {
        path: 'users/edit/:id',
        component: EditUserComponent
      },
      {
        path: 'events',
        component: EventDefinitionComponent
      },
      {
        path: 'events/create',
        component: CreateEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
