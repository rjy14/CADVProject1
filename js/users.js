function register(){
    var response = "";
    var jsonData = new Object();
    jsonData.Username = document.getElementById("Username").value;
    jsonData.Address = document.getElementById("Address").value;
    jsonData.Email = document.getElementById("Email").value;
    jsonData.Name = document.getElementById("Name").value;
    jsonData.password = document.getElementById("password").value;

    if (jsonData.Username == "" || jsonData.Address == "" || jsonData.Email == "" || jsonData.Name == "" ||
     jsonData.password == "" ) {
        alert('Please fill in all fields'); return;
    }
    if (jsonData.password != document.getElementById("confirm-password").value){
        alert('password and confirm password does not match'); return;
    }
    var request = new XMLHttpRequest();
    request.open("POST", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/user-register", true);
    request.onload = function(){
        response = JSON.parse(request.responseText);
        if (response.messge == "user added"){
            $('#registerForm').modal('hide');
            $('#loginForm').modal('show');
            document.getElementById("loginId").value = document.getElementById("Username").value
            }
            else {
                alert('Error. Unable to register user.');
            }
        };
 request.send(JSON.stringify(jsonData));
}
function user_login(){
var response = "";
 var jsonData = new Object();
 jsonData.Username = document.getElementById("loginId").value;
 jsonData.password = document.getElementById("loginPassword").value;
 if (jsonData.Username == "" || jsonData.password == "") {
 alert( 'all fields are required'); return;
}
var request = new XMLHttpRequest();
request.open("POST", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/user-login", true);
request.onload = function() {
    response = JSON.parse(request.responseText);
    if (response.Count == 1 || response.length == 1) {
        if (response.Count == 1) {
            sessionStorage.setItem("Username", jsonData.Username);
            sessionStorage.setItem("user", JSON.stringify(response.Items[0]));
        }
    $('#loginForm').modal('hide');
        setNavBar();
    }
    else {
    alert('Error. Unable to login.');
    }
    };
    request.send(JSON.stringify(jsonData));
}

function addToCart(){
if (sessionStorage.getItem("Username") == null) {
    alert('You need be a registered user to add items to cart');
} else {
 var response ="";

 var jsonData = new Object();

    var request = new XMLHttpRequest();
    request.open("POST", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/addtocart", true);
    };
    request.send(JSON.stringify(jsonData));

}

function updateProfile(){
    var response= "";
    var jsonData = new Object();
    jsonData.password = document.getElementById("password").value;
    jsonData.Username = document.getElementById("Username").value;


    if (jsonData.password == ""){
        alert('pls fill in all required fields');return
    }
    var request = new XMLHttpRequest(); 
    request.open("PUT", "https://1uc5lbhdt4.execute-api.us-east-1.amazonaws.com/update-profile", true);
    request.onload = function() {
    response = JSON.parse(request.responseText);

if (response.messge == "user updated") {
alert('Profile updated successfully.');
}
else {
alert('Error. Unable to update profile.');
}
};
request.send(JSON.stringify(jsonData));
}
