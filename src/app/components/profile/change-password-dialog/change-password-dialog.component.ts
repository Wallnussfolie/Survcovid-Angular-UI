import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, FormControlName } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { MatchingPasswordValidator } from 'src/app/shared/validators/MatchingPasswordValidator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  passwordRequirements: string = "Your password must contain: at least one digit, 1 capital letter, 1 small letter and the length must between 8 and 32 characters."

  passwordValidators: Array<ValidatorFn> = [
    Validators.required,
    Validators.pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_\-!@#\$%\^&\*])/,"g")),
    Validators.minLength(8),
    Validators.maxLength(32)
  ]

  passwordResetForm: FormGroup = new FormGroup({
    newPassword:  new FormControl('', this.passwordValidators),
    newPasswordConfirmation:  new FormControl('', this.passwordValidators)
  },{
    validators: [
      MatchingPasswordValidator
    ]
  })

  onSubmit(){
    
    this.profileService.changePassword(
      "12345",
      this.passwordResetForm.get('newPassword').value, 
      this.passwordResetForm.get('newPasswordConfirmation').value).subscribe({
        next: (respBody) => {

          console.log(respBody.message)

          this.snackBar.open("Password was changed successfully!","Okay",{
            duration: 5000,
            horizontalPosition: "right",
            verticalPosition: "bottom"
            
          })

          this.router.navigateByUrl("/profile");
        },
        error: (err) => {
          console.error(err);

          this.snackBar.open("There was an error during your password change. Please try again!", "Okay",{
            duration: 5000,
            horizontalPosition: "right",
            verticalPosition: "bottom",
            panelClass: ['mat-toolbar','mat-warn']
          })

        }
      }
      )
  }
}
