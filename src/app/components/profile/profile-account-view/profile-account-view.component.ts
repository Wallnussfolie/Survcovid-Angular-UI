import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-account-view',
  templateUrl: './profile-account-view.component.html',
  styleUrls: ['./profile-account-view.component.css']
})
export class ProfileAccountViewComponent implements OnInit {

  constructor() { }

  public accountStateText: string = "";

  @Input() public user: any;

  ngOnInit(): void {

    if (this.user.activeAccount == true){

      this.accountStateText = "Active";

    } else {
      this.accountStateText = "Deactivated";
    }

  }

}
