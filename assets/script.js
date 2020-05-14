
// PASSWORD PROTECTION SCRIPT

function TheLogin() {

var password = 'letmein';
var x = document.getElementById("wrongpass");
var y = document.getElementById("pass");

if (this.document.login.pass.value == password) {
  top.location.href="contact.html";
}
else if (this.document.login.pass.value !== password){
    x.style.display = "block";
    y.style.display = "none";
}
}