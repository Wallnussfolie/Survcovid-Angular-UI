import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {InventoryService} from '../../services/inventory.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, AfterViewInit {

  public inventory: any = {};
  displayedColumns = ["itemCount", "itemTypeDisplayName", "itemTypeName"];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private inventoryService: InventoryService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.getInventory();
  }

  ngAfterViewInit() {
    this.inventory.sort = this.sort;
    this.inventory.paginator = this.paginator;
  }

  getInventory() {
    this.inventoryService.getInventory(this.tokenStorage.getUser()).subscribe(
      (data: any) => {this.inventory = new MatTableDataSource(data); },
      err => console.error(err),
      () => console.log('inventory loaded')
    );
  }

}
