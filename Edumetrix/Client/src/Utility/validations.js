let validateResult = {

    error: "",
    result: false
}

const regex = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/
const mobRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/

class Validations {

    emailValidation(email) {

        if (email === "") {

            validateResult.error = "field should not be empty *"
            validateResult.result = true
        } else if (regex.test(email) === false) {

            validateResult.error = "wrong Email please enter valid email*"
            validateResult.result = true
        }
        return validateResult

    }

    passwordValidation(password) {

        console.log("password", password);

        if (password === "") {
            validateResult.error = "password should not be empty*"
            validateResult.result = true
        } else if (password.length < 8) {
            validateResult.error = "password should be at least 8 character*"
            validateResult.result = true
        }
        return validateResult
    }
    mobileNovalidation = (mobileNo) => {

        if (mobRegex.test(mobileNo) === false) {
            validateResult.error = "mobile number is not valid*"
            validateResult.result = true
        }
        if(mobileNo === ""){
            validateResult.error = "field should not be empty*"
            validateResult.result = true
        }
        return validateResult
    }

    username(username) {
        if (username.length < 2) {
            validateResult.error = "field should be minimum 2 characters*"
            validateResult.result = true
        }
        return validateResult
    }
}

export default Validations