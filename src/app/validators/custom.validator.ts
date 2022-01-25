import {AbstractControl} from "@angular/forms";

export const matchValidator = (Control: AbstractControl) => {
    const firstName = Control.get('firstName');
    const lastName = Control.get('lastName');

    return firstName && lastName && firstName.value === lastName.value && firstName.value !== "" && lastName.value !== "" ? {match: true} : null
}