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

}
