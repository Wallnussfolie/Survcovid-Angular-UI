import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventory;

  constructor(private inventoryService: InventoryService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.inventoryService.getInventory(this.tokenStorage.getUser()).subscribe(
      data => {this.inventory = data; },
      err => console.error(err),
      () => console.log('inventory loaded')
    );
  }

}
