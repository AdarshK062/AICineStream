export const checkLoginData = (newUser, name, email, password) => {
    if(newUser){
        const nameCheck = /^[a-zA-Z-' ]+$/.test(name.value);
        if(!nameCheck){
            return "Enter valid name";
        }
    }

    const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value);
    if(!emailCheck){
        return "Enter valid email address";
    }

    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value);
    if(!passwordCheck){
        return "Enter valid password";
    }

    return null;

}