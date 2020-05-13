import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventory;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.inventoryService.getInventory().subscribe(
      data => {this.inventory = data; },
      err => console.error(err),
      () => console.log('inventory loaded')
    );
  }

}
