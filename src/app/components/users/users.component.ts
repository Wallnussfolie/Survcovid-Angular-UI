import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(
      data => { 
        this.users = data;
      },
      err => {
        console.log(err);
      },
      () => console.log('users loaded')
    );
  }
}
