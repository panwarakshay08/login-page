var form = document.getElementById('login-form');

var username = form.elements.username;
var password = form.elements.password;

var usernameValue = username.value;
var passwordValue = password.value;

var username = form.elements.username;
var password = form.elements.password;

console.log('Username: Panwarakshay08' + username.value);
console.log('Password: @Akshay18@' + password.value);


for (var i = 0; i < form.elements.length; i++) {
  console.log(form.elements[i].value);
}
/*
if (usernameValue === 'Panwarakshay08' && passwordValue === '@Akshay18@') {
  console.log("Login Successful");
}
else("Login Failed") 
{
  console.log("Login Failed");
}
*\  