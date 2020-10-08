import { Component, OnInit } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  passwordRequirements: string = "Your password must contain: at least one digit, 1 capital letter, 1 small letter and the length must be at least 8 characters."

  passwordValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\-!@#\$%\^&\*])/,"g")),
    Validators.minLength(8)
  ]

  newPassword = new FormControl('', this.passwordValidators);

  newPasswordConfirmation = new FormControl('', this.passwordValidators)


}
