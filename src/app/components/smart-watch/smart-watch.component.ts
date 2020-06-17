import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'smart-watch',
  templateUrl: './smart-watch.component.html',
  styleUrls: ['./smart-watch.component.css']
})
export class SmartWatchComponent implements OnInit {

  @Input() isLoggedIn;
  @Input() showAdminBoard;
  constructor() { }

  ngOnInit(): void {
  }

}
