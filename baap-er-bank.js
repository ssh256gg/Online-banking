
document.getElementById('login-btn').addEventListener('click', function(){
    const userLogin = document.getElementById('user-email');
    const loginDetails = userLogin.value;
    const userPass = document.getElementById('user-password');
    const passDetails = userPass.value;
    // this is not an accurate way to check user id and password
    if(loginDetails === "hasan@mhsn.com" && passDetails === '123456789'){
        document.getElementById('falseData').setAttribute('hidden',true)
        window.open('./user-interface.html')
    }
    else{
        document.getElementById('falseData').removeAttribute('hidden')
    }
})