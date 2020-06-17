import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public items;
  form: any = {};
  errorMessage = '';
  successMessage = '';

  constructor(private shopService: ShopService, private tokenStorage: TokenStorageService) {  }

  ngOnInit(): void {
    this.getItems();
  }

   getItems() {
    this.shopService.getItems(this.tokenStorage.getUser()).subscribe(
      data => {this.items = data; },
      err => console.error(err),
      () => console.log('shop loaded')
    );
  }

  buyItem(item) {
    this.shopService.buyItem(item, this.form.amount, this.tokenStorage.getUser()).subscribe(
      data => {
        console.log(data);
        this.successMessage = "Purchase was successfully executed.";
        this.getItems();
      },
      err => { 
        console.log(err);
        this.errorMessage = "Purchase could not be executed.";
      },
      () => console.log('bought item')
      );
  }

}
