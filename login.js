let username = document.getElementById('username');
let userpassword = document.getElementById('password');
let usererror = document.getElementById('usererror');
let passworderror = document.getElementById('passworderror');

let flag1 = 1;
let flag2 = 1;
function formvalidation() {

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
  if (flag1 && flag2) {
    return true;

  } else {
    return false;
  }


}


