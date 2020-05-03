import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameEventComponent } from './components/game-event/game-event.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import {InventoryService} from './services/inventory.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameEventComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
