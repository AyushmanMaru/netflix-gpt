
const validate = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)
    

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid"; 

    return null;
};

export default validate;
