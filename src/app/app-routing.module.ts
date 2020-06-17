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


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'myInventory',
    component: InventoryComponent
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
    path: 'admin',
    component: BoardAdminComponent
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
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
