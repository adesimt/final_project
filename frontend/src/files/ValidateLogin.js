export default function validations(values){
    let errors = {}

    //email
    if (!values.email){
        errors.email = 'Email required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Please enter a valid email';
    }

    //password
    if(!values.password){
        errors.password = 'Password is required';
    }
    else if(values.password.length < 6){
        errors.password = 'Password must contain between 6 and 60 characters'
    }


    return errors;



}