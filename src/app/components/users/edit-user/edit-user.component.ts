import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user;
  user_id;
  errorMessage;
  isFailed = false;
  submitted = false;
  password;
  gameState;
  userState;


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.user_id = id;
    this.getUser(id);
  }

  getUser(id)
  {
    this.userService.getUser(id).subscribe(
      data => this.user = data,
      err => console.log(err),
      () => console.log('user loaded')
      );
  }

  onSubmit()
  {
    if (this.user.new_password)
    {
      this.user.password = this.user.new_password;
      delete this.user.new_password;
    }
    this.submitted = true;
    this.userService.update(this.user_id, this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/admin/users/', this.user_id]);
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.isFailed = true;
      },
      () => 'user updated'
      );
  }

}
