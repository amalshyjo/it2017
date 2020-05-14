function passWord() {
 
    var pass1 = prompt('Please Enter Your Password',' ');
  
    if (pass1.toLowerCase() == "letmein") {
    window.open('contact.html');
    }
     else {
        window.open('login.html');
    }
    }