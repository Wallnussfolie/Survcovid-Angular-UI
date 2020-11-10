import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id)
  {
    this.userService.getUser(id).subscribe(
      (data: any) => {
        this.user = data.data[0];
        console.log(data.data);
      },
      err => console.log(err),
      () => console.log('user loaded')
      );
  }

  deleteUser(id)
  {
    this.userService.deleteUser(id).subscribe(
      data => {
        this.router.navigate(['/admin/users']);
      },
      err => {
        this.router.navigate(['/admin/users']);
      },
      () => console.log('user deleted')
      );
  }

}
