let username = document.getElementById('username');
let userpassword = document.getElementById('password');
let usererror = document.getElementById('usererror');
let passworderror = document.getElementById('passworderror');
let repassword = document.getElementById('repassword');
let repassworderror = document.getElementById('repassworderror');
let flag1 = 1;
let flag2 = 1;
let flag3 = 1;
let flag4 = 1;
function formvalidation() {
  let matchpassword = userpassword.value;
  let matchrepassword = repassword.value;
  if (username.value.length == "") {
    usererror.innerHTML = "Enter the user name";
    flag1 = 0;
  } else if (username.value.length < 5) {
    usererror.innerHTML = "Min chr 5";
    flag1 = 0;
  } else {
    usererror.innerHTML = " ";
    flag1 = 1
  }
  if (userpassword.value.length == "") {
    passworderror.innerHTML = "Enter the Password";
    flag2 = 0;
  } else if (userpassword.value.length < 15) {
    passworderror.innerHTML = "Min chr 15";
    flag2 = 0;
  } else {
    passworderror.innerHTML = "Min chr 15";
    flag2 = 1;
  }
  if (repassword.value.length == "") {
    repassworderror.innerHTML = "Enter enter password";
    flag3 = 0;
  } else if (repassword.value.length < 15) {
    repassworderror.innerHTML = "Min chr 15";
    flag3 = 0;
  } else {
    repassworderror.innerHTML = " ";
    flag3 = 1;
  }
  if (flag2 && flag3) {
       
    if (matchpassword != matchrepassword) {
      document.getElementById('matchpassword').style.display = "flex";
      document.getElementById('matchpassword').innerHTML = "your password is not match";
      flag4 = 0;
    } else {
      flag4 = 1;
    }
  }


  if (flag1 && flag2 && flag3 & flag4) {
    return true;

  } else {
    return false;
  }


}


