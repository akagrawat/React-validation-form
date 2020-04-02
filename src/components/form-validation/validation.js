import { emailRegex } from './constants';

export const formErrors = (formErrors) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        if (val.length > 0) {
            valid = false;
        }
    });
    return valid;
}

export const formValid = (state) => {
    let formErrors = state.formErrors;
    let valid = true;
    Object.entries(state).forEach(([key, value]) => {
        if (value.length === 0) {
            formErrors[key] = `${key} is required`;
            valid = false;
        }
    });
    return { formErrors, valid };
}

export const checkErrors = (input, formErrors) => {
    let error = formErrors;
    switch (input.name) {
        case 'name':
            error.name = (input.value.length === 0) ? "Name is required" : ((input.value.length > 0 && input.value.length < 3) ? "Name must be minimum 3 characters" : "");
            break;
        case 'contact':
            error.contact = (input.value.length === 0) ? "Phone number is required" : (isNaN(parseInt(input.value)) ? "Phone number must be in digits" : ((input.value.length === 10) ? "" : "Phone number must be 10 digits"));
            break;
        case 'email':
            error.email = (input.value.length === 0) ? "Email is required" : ((emailRegex.test(input.value)) ? "" : "Enter valid email");
            break;
        case 'dob':
            error.dob = (input.value.length === 0) ? "DOB is required" : "";
            break;
        case 'gender':
            error.gender = (input.value === 'gender') ? "Gender is required" : "";
            break;
        case 'address':
            error.address = (input.value.length === 0) ? "Address is required" : ((input.value.length > 0 && input.value.length < 5) ? "Address must be 5 characters" : "");
            break;
        case "res_code":
            error.res_code = (input.value.length === 0) ? "Registration code is required" : (((input.value.length > 0 && input.value.length < 3) || input.value.length > 10) ? "Registration code must be between 3 to 10characters" : "");
            break;
        default:
            break;
    }

    return error;
}