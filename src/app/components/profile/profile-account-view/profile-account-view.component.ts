import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialogComponent } from '../change-password-dialog/change-password-dialog.component';

@Component({
  selector: 'profile-account-view',
  templateUrl: './profile-account-view.component.html',
  styleUrls: ['./profile-account-view.component.css']
})
export class ProfileAccountViewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  public accountStateText: string = "";

  @Input() public user: any;

  ngOnInit(): void {

    if (this.user.activeAccount == true){

      this.accountStateText = "Active";

    } else {
      this.accountStateText = "Deactivated";
    }
  }

  openChangePasswordDialog(): void {

    let changePasswordDialog = this.dialog.open(ChangePasswordDialogComponent,{
      data: {
        
      },
      height: '200px',
      width: '300px'
    });

  }

}
