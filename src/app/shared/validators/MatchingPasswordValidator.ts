import { ValidatorFn, ValidationErrors, AbstractControl } from "@angular/forms";

/**
 * This validator implements the ValidatorFn Interface from Angular and checks whether two passwords match each other. 
 * 
 * @param formGroup - the FormGroup that needs Validation
 * 
 * @returns null if the form is valid, else some {@link ValidatorErrors}
 */
export const MatchingPasswordValidator: ValidatorFn = (formGroup: AbstractControl): ValidationErrors | null => {

    // reading bloodpressure, turning them into numbers with +
    const password_1: string = formGroup.get("newPassword")?.value;
    var password_2: string = formGroup.get("newPasswordConfirmation")?.value;

    if (password_1 != password_2){
        // return some custom ValidatorErrors
        return {
            passwordsDoNotMatch: true,
        };
    }
    // if everything is fine, return null
    return null;
}