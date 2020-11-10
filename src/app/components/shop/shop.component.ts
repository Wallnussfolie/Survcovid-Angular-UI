import {AfterViewInit, Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ShopService } from '../../services/shop.service';
import { TokenStorageService } from '../../services/token-storage.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  item: any;
  amount: number;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, AfterViewInit {

  public items: any = {};
  displayedColumns = ["itemTypeDisplayName", "itemPrice", "itemCount", "action"];
  form: any = {};
  msg = '';
  item: any = {};
  amount: number = 0;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private shopService: ShopService, public dialog: MatDialog, private tokenStorage: TokenStorageService) {  }

  ngOnInit(): void {
    this.getItems();
  }

  ngAfterViewInit() {
    this.items.sort = this.sort;
    this.items.paginator = this.paginator;
  }

   getItems() {
    this.shopService.getItems(this.tokenStorage.getUser()).subscribe(
      (data: any) => {
        console.log(data);
        this.items = new MatTableDataSource(data); },
      err => console.error(err),
      () => console.log('shop loaded')
    );
  }

  openDialog(item)
  {
    this.item = item;
    const dialogRef = this.dialog.open(BuyItemDialog, {
      width: '250px',
      height: '250px',
      data: {item: item, amount: 1}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
      {
       this.msg = result;
       this.getItems();
      }
    });
  }

}

@Component({
  selector: 'buy-item-dialog',
  templateUrl: 'buy-item-dialog.html',
})
export class BuyItemDialog {

  msg = '';

  constructor(
    public dialogRef: MatDialogRef<BuyItemDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private shopService: ShopService,
    private tokenStorage: TokenStorageService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  buyItem() {
    this.shopService.buyItem(this.data.item, this.data.amount, this.tokenStorage.getUser()).subscribe(
      data => {
        console.log(data);
        this.msg = "Purchase was successfully executed.";
        this.dialogRef.close(this.msg);
      },
      err => { 
        console.log(err);
        this.msg = "Purchase could not be executed.";
      },
      () => console.log('bought item')
      );
  }

}
