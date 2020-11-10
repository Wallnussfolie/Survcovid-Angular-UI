import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements AfterViewInit, OnInit {

  users: any = {};
  displayedColumns = ["userId", "userName", "email"];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.users.sort = this.sort;
    this.users.paginator = this.paginator;
  }


  getUsers()
  {
    this.userService.getUsers().subscribe(
      data => { 
        console.log(data);
        this.users = new MatTableDataSource(data.data);
      },
      err => {
        console.log(err);
      },
      () => console.log('users loaded')
    );
  }
}
