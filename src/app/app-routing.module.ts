import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {InventoryComponent} from './components/inventory/inventory.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'myInventory',
    component: InventoryComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
